import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodType } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {
  CommunityEvent,
  EditCommunityEvent,
  CommunityEventType,
} from '../../types';
import eventService from '../../Services/eventService';
import eventTypeService from '../../Services/eventTypeService';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  'id' | 'eventType' | 'inPersonEvent' | 'onlineEvent' | 'organizer'
> & {
  eventTypeUUID?: string;
  organizerUUID?: string;
  eventFormat: EventFormatOptionsType;
};

const EventFormatOptionsSchema = z.nativeEnum(EventFormatOptions);

/* Define zod reusable schema patterns */
const schemaPatterns = {
  optionalString: z.string().optional(),
  optionalEmail: z.string().email().optional().or(z.literal('')),
  singleCheckBox: z.boolean().optional(),
};

const validationSchema: ZodType<CommunityEventForm> = z.object({
  date: z.string(),
  eventTypeUUID: z.string().uuid().optional(),
  organizerUUID: z.string().uuid().optional(),
  venue: schemaPatterns.optionalString,
  venueContactName: schemaPatterns.optionalString,
  venueContactEmail: schemaPatterns.optionalEmail,
  venueContactPhone: schemaPatterns.optionalString,
  notes: schemaPatterns.optionalString,
  volunteersNeeded: z.number().optional(),
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
  const [eventTypes, setEventTypes] = useState<
    CommunityEventType[] | undefined
  >(undefined);
  /* Register form and check if communityEvent Exists */

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CommunityEventForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      date: communityEvent?.date,
      eventTypeUUID: communityEvent?.eventType?.id
        ? communityEvent.eventType.id
        : '',
      organizerUUID: communityEvent?.organizer
        ? communityEvent.organizer.id
        : '',
      venue: communityEvent?.venue ? communityEvent.venue : '',
      venueContactName: communityEvent?.venueContactName
        ? communityEvent.venueContactName
        : '',
      venueContactEmail: communityEvent?.venueContactEmail
        ? communityEvent.venueContactEmail
        : '',
      venueContactPhone: communityEvent?.venueContactPhone
        ? communityEvent.venueContactPhone
        : '',
      notes: communityEvent?.notes ? communityEvent.notes : '',
      volunteersNeeded: communityEvent?.volunteersNeeded
        ? communityEvent.volunteersNeeded
        : 0,
      eventFormat: communityEvent?.onlineEvent
        ? EventFormatOptions.Online
        : EventFormatOptions.InPerson,
      ideaConfirmed: communityEvent?.ideaConfirmed
        ? communityEvent.ideaConfirmed
        : false,
      announcementPosted: communityEvent?.announcementPosted
        ? communityEvent.announcementPosted
        : false,
      signUpFormSent: communityEvent?.signUpFormSent
        ? communityEvent.signUpFormSent
        : false,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventTypes = async () => {
      const allEventTypes = await eventTypeService.getAll();
      setEventTypes(allEventTypes);
    };
    fetchEventTypes();
  }, []);

  if (!communityEvent) {
    return <>No matching Community Event</>;
  }

  if (!eventTypes) {
    return (
      <>OH NO!! there are no event types available. Contact an administrator!</>
    );
  }

  const onCancel = () => {
    navigate(`/${communityEvent.id}`);
  };

  const submitData = async (data: CommunityEventForm) => {
    const eventId: string = communityEvent.id;
    const event: EditCommunityEvent = {
      eventTypeUUID: data.eventTypeUUID,
      organizerUUID: data.organizerUUID,
      ideaConfirmed: data.ideaConfirmed,
      date: data.date,
      inPersonEvent:
        data.eventFormat === EventFormatOptions.InPerson ? true : false,
      onlineEvent:
        data.eventFormat === EventFormatOptions.Online ? true : false,
      notes: data.notes,
      venue: data.venue,
      venueContactName: data.venueContactName,
      venueContactPhone: data.venueContactPhone,
      announcementPosted: data.announcementPosted,
      signUpFormSent: data.signUpFormSent,
      volunteersNeeded: data.volunteersNeeded,
      volunteerRequestsSent: data.volunteerRequestsSent,
    };

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
            {...register('organizerUUID')}
            className={style.text}
          />
          {errors.organizerUUID && (
            <span className="text-red-700">{errors.organizerUUID.message}</span>
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
            {eventTypes &&
              eventTypes.length > 0 &&
              eventTypes.map((eventType: CommunityEventType) => {
                return (
                  <option key={eventType.id} value={eventType.id}>
                    {eventType.type}
                  </option>
                );
              })}
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
            Event Date
          </label>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <DayPicker
                mode="single"
                selected={value ? new Date(value) : new Date()}
                fromDate={new Date()}
                onSelect={(e) => onChange(e?.toISOString())}
                footer={false}
              />
            )}
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
          <label className={style.formLabel} htmlFor="volunteersNeeded">
            Number of Volunteers needed
          </label>
          <input
            type="number"
            id="volunteersNeeded"
            placeholder="Number of volunteers needed"
            {...register('volunteersNeeded', { valueAsNumber: true })}
            className={style.text}
          />
          {errors.volunteersNeeded && (
            <span className="text-red-700">
              {errors.volunteersNeeded.message}
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
      <div className="flex flex-row align-middle gap-3 py-6">
        <input
          className="bg-zinc-400 px-4 py-1 self-baseline text-white text-xs leading-loose hover:bg-lime-600 cursor-pointer"
          type="submit"
        />
        <button
          className="bg-zinc-400 px-4 py-1 self-baseline text-white text-xs leading-loose hover:bg-red-600"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
