import EventForm from "./EventForm";
import { useLoaderData } from "react-router-dom";
import { CommunityEvent } from "../../types";

const EditEvent = () => {
  const communityEvent = useLoaderData() as CommunityEvent;
  return (
    <EventForm communityEvent={communityEvent} />
  );
};

export default EditEvent;