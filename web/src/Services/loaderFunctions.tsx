import { LoaderFunctionArgs } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { QueryClient } from '@tanstack/react-query';

export class LoaderBaseError extends Error {}
export class NotFoundError extends LoaderBaseError {}
export class UnauthorizedError extends LoaderBaseError {}

function translateLoaderError(e: unknown): LoaderBaseError {
  if (e instanceof LoaderBaseError) {
    return e;
  }
  if (e instanceof AxiosError) {
    if (e.response?.status === 404) {
      return new NotFoundError();
    }
    if (e.response?.status === 401) {
      return new UnauthorizedError();
    }
    return new LoaderBaseError(String(e));
  }
  return new LoaderBaseError(String(e));
}

function loader(
  logic: (
    queryClient: QueryClient,
    args: LoaderFunctionArgs,
  ) => Promise<unknown>,
) {
  return (queryClient: QueryClient) => async (args: LoaderFunctionArgs) => {
    try {
      return await logic(queryClient, args);
    } catch (e) {
      throw translateLoaderError(e);
    }
  };
}

const eventsQuery = {
  queryKey: ['community-events'],
  queryFn: async () => {
    const req = await axios.get('/api/community-events');
    return req.data.data;
  },
};

const eventDetailQuery = (id: string) => ({
  queryKey: ['community-events', id],
  queryFn: async () => {
    const req = await axios.get(`/api/community-events/${id}`);
    return req.data.data;
  },
});

export const userQuery = {
  queryKey: ['user'],
  retry: false,
  queryFn: async () => {
    const req = await axios.get('/api/auth/user');
    return req.data;
  },
};

/* Retrive current user from the server */

export const userLoader = loader(async (queryClient) => {
  return (
    queryClient.getQueryData(userQuery.queryKey) ??
      (await queryClient.fetchQuery(userQuery))
  )
});

/* Retrieve all Events from the server */
export const eventsLoader = loader(async (queryClient) => {
  return (
    queryClient.getQueryData(eventsQuery.queryKey) ??
    (await queryClient.fetchQuery(eventsQuery))
  );
});

/* Retrieve a single event from the server */
export const eventDetailsLoader = loader(async (queryClient, { params }) => {
  if (!params.id) {
    throw new NotFoundError();
  }
  return (
    queryClient.getQueryData(eventDetailQuery(params.id).queryKey) ??
    (await queryClient.fetchQuery(eventDetailQuery(params.id)))
  );
});
