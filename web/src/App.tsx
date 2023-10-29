import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { eventDetailsLoader, eventsLoader } from './Services/loaderFunctions';
//Layouts
import RootLayout from './Layout/RootLayout';
//Pages
import LoginForm from './Components/LoginForm';
import EventList from './Components/EventList/EventList';
import EventDetails from './Components/EventDetails/EventDetails';
import NotFound from './Components/Error/NotFound';
import EventDetailsError from './Components/Error/EventDetailsError';
import EditEvent from './Components/EditEvent/EditEvent';
import RegistrationForm from './Components/RegistrationForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
        errorElement: <NotFound />,
      },
      {
        path: 'register',
        element: <RegistrationForm />,
        errorElement: <NotFound />,
      },
      {
        path: 'edit/:id',
        element: <EditEvent />,
        loader: eventDetailsLoader,
        errorElement: <EventDetailsError />,
      },
      {
        index: true,
        element: <EventList />,
        loader: eventsLoader,
      },
      {
        path: ':id',
        element: <EventDetails />,
        loader: eventDetailsLoader,
        errorElement: <EventDetailsError />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
