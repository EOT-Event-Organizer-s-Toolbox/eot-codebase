import EventForm from "./EventForm";
import { useLoaderData } from "react-router-dom";
import { CommunityEvent } from "../../types";

const EditEvent = () => {
  const event = useLoaderData() as CommunityEvent;
  return (
    <EventForm event={event} />
  );
};

export default EditEvent;