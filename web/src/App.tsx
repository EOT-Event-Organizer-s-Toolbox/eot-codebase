import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { eventDetailsLoader, eventsLoader, userLoader } from './Services/loaderFunctions';
//Layouts
import RootLayout from './Layout/RootLayout';
//Pages
import LoginForm from './Components/LoginForm';
import EventList from './Components/EventList/EventList';
import EventDetails from './Components/EventDetails/EventDetails';
import NotFound from './Components/Error/NotFound';
import EditEvent from './Components/EditEvent/EditEvent';
import RegistrationForm from './Components/RegistrationForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import DefaultErrorComponent from './Components/Error/DefaultErrorComponent';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <DefaultErrorComponent />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'register',
        element: <RegistrationForm />,
      },
      {
        path: 'edit/:id',
        element: <EditEvent />,
        loader: eventDetailsLoader(queryClient),
      },
      {
        index: true,
        element: <EventList />,
        loader: eventsLoader(queryClient),
      },
      {
        path: ':id',
        element: <EventDetails />,
        loader: eventDetailsLoader(queryClient),
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
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
