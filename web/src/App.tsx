import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { eventDetailsLoader, eventsLoader } from './Services/loaderFunctions';
//Layouts
import RootLayout from './Layout/RootLayout';
//Pages
import EventList from './Components/EventList/EventList';
import EventDetails from './Components/EventDetails/EventDetails';
import NotFound from './Components/Error/NotFound';
import EventDetailsError from './Components/Error/EventDetailsError';
import EditEvent from './Components/EditEvent/EditEvent';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          path="edit/:id"
          element={<EditEvent />}
          loader={eventDetailsLoader}
          errorElement={<EventDetailsError />}
        />
        <Route index element={<EventList />} loader={eventsLoader} />
        <Route
          path=":id"
          element={<EventDetails />}
          loader={eventDetailsLoader}
          errorElement={<EventDetailsError />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
