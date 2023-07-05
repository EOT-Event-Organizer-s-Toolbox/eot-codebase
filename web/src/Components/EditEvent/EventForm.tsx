import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { CommunityEvent } from "../../types";

enum EventFormatOptions {
  InPerson = "IN PERSON EVENT",
  Online = "ONLINE EVENT"
}

type EventFormatOptionsType = {
  id: string;
  label: string;
};


const enumToArray = (e: typeof EventFormatOptions): EventFormatOptionsType[] => {
  return Object.keys(e).map((key: string): EventFormatOptionsType => {
    return { id: key, label: e[key as keyof typeof EventFormatOptions] as string };
   });
};

type CommunityEventForm = Omit<CommunityEvent, 'id' | 'eventType' | 'inPersonEvent' | 'onlineEvent' > & {
  eventTypeUUID: string;
  eventFormat: EventFormatOptions;
};

const EventFormatOptionsSchema = z.nativeEnum(EventFormatOptions);

const schemaPatterns = {
  optionalString: z.string().optional().or(z.literal('')),
  optionalEmail: z.string().email().optional().or(z.literal('')),
  singleCheckBox: z.literal(true).or(z.literal(false))
}

const validationSchema:ZodType<CommunityEventForm> = z.object({
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


const EventForm = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<CommunityEventForm>({
    resolver: zodResolver(validationSchema)
  });

  const submitData = (data: CommunityEventForm) => {
    console.log("form submitted", data);
  };

  const style = {
    text: "border border-slate-700 p-1",
    formLabel: "capitalize text-slate-700",
    select: "border border-slate-700 p-1",
  };

  return (
    <form onSubmit={handleSubmit(submitData)} className="p-5" >
      <div className="temp-form-group">

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="organizer">Organizer</label>
          <input type="text" id="organizer" placeholder="Organizer"
            {...register("organizer")}
            className={style.text}
          />
          {errors.organizer && <span className="text-red-700">{errors.organizer.message}</span>}
        </div>
        
        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="eventTypeUUID">Event Type</label>
          <select id="eventTypeUUID" {...register("eventTypeUUID")} className={style.select}>
            <option value="5f478c15-2718-4f67-83d6-4c8d6ca5c8c9">JS Social</option>
            <option value="e1188e72-2a67-4532-9c5a-df5873f68b9d">Code Club</option>
            <option value="7ec438a2-0c9d-4c0e-98c6-9f2df76f2ee3">JS Talks</option>
          </select>
          {errors.eventTypeUUID && <span className="text-red-700">{errors.eventTypeUUID.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="eventFormat">Event Format</label>
          <select id="eventFormat" {...register("eventFormat")} className={style.select}>
            {enumToArray(EventFormatOptions).map((option) => <option key={option.id} value={option.label}>{option.label}</option>)}
          </select>
          {errors.eventFormat && <span className="text-red-700">{errors.eventFormat.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="date">Date</label>
          <input type="text" id="date" placeholder=""
            {...register("date")}
            className={style.text}
          />
          {errors.date && <span className="text-red-700">{errors.date.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venue">Venue</label>
          <input type="text" id="venue" placeholder="Venue"
            {...register("venue")}
            className={style.text}
          />
          {errors.venue && <span className="text-red-700">{errors.venue.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactName">Venue contact name</label>
          <input type="text" placeholder="Venue contact name"
            {...register("venueContactName")}
            className={style.text}
          />
          {errors.venueContactName && <span className="text-red-700">{errors.venueContactName.message}</span>}
        </div>
        
        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactEmail">Venue contact email</label>
          <input type="text" placeholder="Venue contact email"
            {...register("venueContactEmail")}
            className={style.text}
          />
          {errors.venueContactEmail && <span className="text-red-700">{errors.venueContactEmail.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="venueContactPhone">Venue contact phone number</label>
          <input
            id="venueContactPhone"
            type="text"
            placeholder="Venue contact phone"
            {...register("venueContactPhone")}
            className={style.text}
          />
          {errors.venueContactPhone && <span className="text-red-700">{errors.venueContactPhone.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="notes">Event Notes</label>
          <textarea
            id="notes"            
            placeholder="Event Notes"
            {...register("notes")}
            className={style.text}
          />
          {errors.notes && <span className="text-red-700">{errors.notes.message}</span>}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="ideaConfirmed">Idea Confirmed</label>
          <input type="checkbox" id="ideaConfirmed" {...register("ideaConfirmed")} />
          {errors.ideaConfirmed && <span className="text-red-700 flex-grow">{errors.ideaConfirmed.message}</span>}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="announcementPosted">Announcement Posted</label>
          <input type="checkbox" id="announcementPosted" {...register("announcementPosted")} />
          {errors.announcementPosted && <span className="text-red-700 flex-grow">{errors.announcementPosted.message}</span>}
        </div>

        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="signUpFormSent">Sign-up Form Sent</label>
          <input type="checkbox" id="signUpFormSent" {...register("signUpFormSent")} />
          {errors.signUpFormSent && <span className="text-red-700 flex-grow">{errors.signUpFormSent.message}</span>}
        </div>

        <div className="flex flex-col gap-1 pb-2">
          <label className={style.formLabel} htmlFor="numVolunteersNeeded">Number of Volunteers needed</label>
          <input
            type="number"
            id="numVolunteersNeeded"            
            placeholder="Number of volunteers needed"
            {...register("numVolunteersNeeded", { valueAsNumber: true })}
            className={style.text}
          />
          {errors.numVolunteersNeeded && <span className="text-red-700">{errors.numVolunteersNeeded.message}</span>}
        </div>
        
        <div className="flex flex-row flex-wrap gap-1 pb-2">
          <label className={style.formLabel} htmlFor="volunteerRequestsSent">Volunteer Requests Sent</label>
          <input type="checkbox" id="volunteerRequestsSent" {...register("volunteerRequestsSent")} />
          {errors.volunteerRequestsSent && <span className="text-red-700 flex-grow">{errors.volunteerRequestsSent.message}</span>}
        </div>

      </div>
      <input className="bg-slate-500 text-white px-5 py-1 " type="submit" />
    </form>
  )
};

export default EventForm;