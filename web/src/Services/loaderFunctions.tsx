import eventService from "./eventService";

export const eventsLoader = async () => {
    const allEvents = await eventService.getAll();
    return allEvents
}

// Getting an error here due to params being of type any
export const eventDetailsLoader = async ({ params }) => {
    const { id } = params
    const eventDetails = await eventService.getEvent(id);
    return eventDetails
}