
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { CommunityEvent, EditCommunityEvent } from "../../types";
import eventService from "../../Services/eventService";
import { useNavigate } from "react-router-dom";


/* communityEvent format replaces values for inPersonEvent(BOOLEAN) and onlineEvent(BOOLEAN) */
const EventFormatOptions = {
  InPerson: 'IN PERSON EVENT',
  Online: 'ONLINE EVENT',
} as const;

type EventFormatOptionsType =
  (typeof EventFormatOptions)[keyof typeof EventFormatOptions];

/* CommunityEventForm type is used to interact with react hook forms an */
/* Event type is replaced with a reference */
/* Event format is used to control toggle between communityEvent formats that are stored in 2 parts */
type CommunityEventForm = Omit<
  CommunityEvent,
  'id' | 'eventType' | 'inPersonEvent' | 'onlineEvent'
> & {
  eventTypeUUID: string;
  eventFormat: EventFormatOptionsType;
};

const EventFormatOptionsSchema = z.nativeEnum(EventFormatOptions);

/* Define zod reusable schema patterns */
const schemaPatterns = {
  optionalString: z.string().optional(),
  optionalEmail: z.string().email().optional().or(z.literal('')),
  singleCheckBox: z.literal(true).or(z.literal(false)),
};

const validationSchema: ZodType<CommunityEventForm> = z.object({
  date: z.string().optional(),
  eventTypeUUID: z.string().uuid(),
  organizer: z.string().min(1).max(50),
  venue: schemaPatterns.optionalString,
  venueContactName: schemaPatterns.optionalString,
  venueContactEmail: schemaPatterns.optionalEmail,
  venueContactPhone: schemaPatterns.optionalString,
  notes: schemaPatterns.optionalString,
  numVolunteersNeeded: z.number().optional(),
  eventFormat: EventFormatOptionsSchema,
  ideaConfirmed: schemaPatterns.singleCheckBox,
  announcementPosted: schemaPatterns.singleCheckBox,
  signUpFormSent: schemaPatterns.singleCheckBox,
  volunteerRequestsSent: schemaPatterns.singleCheckBox,
});

type Props = {
  communityEvent: CommunityEvent | undefined;
};

const EventForm = ({ communityEvent }: Props) => {
  /* Register form and check if communityEvent Exists */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommunityEventForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      ...(communityEvent
        ? {
            ...communityEvent,
            eventTypeUUID: communityEvent.eventType?.id,
            eventFormat: communityEvent.inPersonEvent
              ? EventFormatOptions.InPerson
              : EventFormatOptions.Online,
          }
        : {}),
    },
  });

  const navigate = useNavigate();

  if (!communityEvent) {
    return <>No matching Community Event</>;
  }

  const submitData = async (data: CommunityEventForm) => {
    const eventId: string = communityEvent.id;
    
    const event: EditCommunityEvent = {
      eventTypeUUID: data.eventTypeUUID,
      ideaConfirmed: data.ideaConfirmed,
      organizer: data.organizer,
      date: data.date,
      inPersonEvent: data.eventFormat === EventFormatOptions.InPerson ? true : false,
      onlineEvent: data.eventFormat === EventFormatOptions.Online ? true : false,
      notes: data.notes,
      venue: data.venue,
      venueContactName: data.venueContactName,
      venueContactPhone: data.venueContactPhone,
      announcementPosted: data.announcementPosted,
      signUpFormSent: data.signUpFormSent,
      numVolunteersNeeded: data.numVolunteersNeeded,
      volunteerRequestsSent: data.volunteerRequestsSent
    }

    const submittedEvent = await eventService.updateEvent(eventId, event);
    
    if (submittedEvent) {
      navigate(`/${eventId}`);
    }
  };

  const style = {
    text: 'border border-slate-700 p-1',
    formLabel: 'capitalize text-slate-700',
    select: 'border border-slate-700 p-1',
  };

  return (
    <form onSubmit={handleSubmit(submitData)} className="p-5">
      <div className="temp-form-group">
        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="organizer">
            Organizer
          </label>
          <input
            type="text"
            id="organizer"
            placeholder={'Organizer'}
            {...register('organizer')}
            className={style.text}
          />
          {errors.organizer && (
            <span className="text-red-700">{errors.organizer.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="eventTypeUUID">
            Event Type
          </label>
          <select
            id="eventTypeUUID"
            {...register('eventTypeUUID')}
            className={style.select}
          >
            <option value="12345678-1234-5678-1234-567812345655">
              JS Social
            </option>
            <option value="12345678-1234-5678-1234-567812345656">
              Code Jam
            </option>
            <option value="12345678-1234-5678-1234-567812345658">
              Tech Talks
            </option>
          </select>
          {errors.eventTypeUUID && (
            <span className="text-red-700">{errors.eventTypeUUID.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="eventFormat">
            Event Format
          </label>
          <select
            id="eventFormat"
            {...register('eventFormat')}
            className={style.select}
          >
            {Object.values(EventFormatOptions).map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {errors.eventFormat && (
            <span className="text-red-700">{errors.eventFormat.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="date">
            Date (use 2023-05-12T18:30:00.000Z to test)
          </label>
          <input
            type="text"
            id="date"
            placeholder=""
            {...register('date')}
            className={style.text}
          />
          {errors.date && (
            <span className="text-red-700">{errors.date.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venue">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            placeholder="Venue"
            {...register('venue')}
            className={style.text}
          />
          {errors.venue && (
            <span className="text-red-700">{errors.venue.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactName">
            Venue contact name
          </label>
          <input
            type="text"
            placeholder="Venue contact name"
            {...register('venueContactName')}
            className={style.text}
          />
          {errors.venueContactName && (
            <span className="text-red-700">
              {errors.venueContactName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactEmail">
            Venue contact email
          </label>
          <input
            type="text"
            placeholder="Venue contact email"
            {...register('venueContactEmail')}
            className={style.text}
          />
          {errors.venueContactEmail && (
            <span className="text-red-700">
              {errors.venueContactEmail.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactPhone">
            Venue contact phone number
          </label>
          <input
            id="venueContactPhone"
            type="text"
            placeholder="Venue contact phone"
            {...register('venueContactPhone')}
            className={style.text}
          />
          {errors.venueContactPhone && (
            <span className="text-red-700">
              {errors.venueContactPhone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="notes">
            Event Notes
          </label>
          <textarea
            id="notes"
            placeholder="Event Notes"
            {...register('notes')}
            className={style.text}
          />
          {errors.notes && (
            <span className="text-red-700">{errors.notes.message}</span>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="ideaConfirmed">
            Idea Confirmed
          </label>
          <input
            type="checkbox"
            id="ideaConfirmed"
            {...register('ideaConfirmed')}
          />
          {errors.ideaConfirmed && (
            <span className="text-red-700 flex-grow">
              {errors.ideaConfirmed.message}
            </span>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="announcementPosted">
            Announcement Posted
          </label>
          <input
            type="checkbox"
            id="announcementPosted"
            {...register('announcementPosted')}
          />
          {errors.announcementPosted && (
            <span className="text-red-700 flex-grow">
              {errors.announcementPosted.message}
            </span>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="signUpFormSent">
            Sign-up Form Sent
          </label>
          <input
            type="checkbox"
            id="signUpFormSent"
            {...register('signUpFormSent')}
          />
          {errors.signUpFormSent && (
            <span className="text-red-700 flex-grow">
              {errors.signUpFormSent.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="numVolunteersNeeded">
            Number of Volunteers needed
          </label>
          <input
            type="number"
            id="numVolunteersNeeded"
            placeholder="Number of volunteers needed"
            {...register('numVolunteersNeeded', { valueAsNumber: true })}
            className={style.text}
          />
          {errors.numVolunteersNeeded && (
            <span className="text-red-700">
              {errors.numVolunteersNeeded.message}
            </span>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="volunteerRequestsSent">
            Volunteer Requests Sent
          </label>
          <input
            type="checkbox"
            id="volunteerRequestsSent"
            {...register('volunteerRequestsSent')}
          />
          {errors.volunteerRequestsSent && (
            <span className="text-red-700 flex-grow">
              {errors.volunteerRequestsSent.message}
            </span>
          )}
        </div>
      </div>
      <input className="bg-slate-500 text-white px-5 py-1 " type="submit" />
    </form>
  );
};

export default EventForm;
