import { useLoaderData } from "react-router-dom"
import { EventType } from "../../types"
import { Link } from "react-router-dom";

const EventDetails = () => {
    const event = useLoaderData() as EventType;
    return (
        <>
            <div>EventDetails</div>
            <p>{event.id}</p>
            <p>{event.eventName}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <Link to="/">Return to Event List</Link>
        </>
    )
}

export default EventDetails