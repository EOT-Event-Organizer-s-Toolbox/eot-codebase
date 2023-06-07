import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import eventService from "./eventService";

export const eventsLoader: LoaderFunction = async () => {
    return await eventService.getAll();
}

export const eventDetailsLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) return null
    return await eventService.getEvent(parseInt(params.id));
}