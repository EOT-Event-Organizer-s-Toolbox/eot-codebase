import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { eventDetailsLoader, eventsLoader } from './Services/loaderFunctions';
import './App.css';
//Layouts
import RootLayout from './Layout/RootLayout';
//Pages
import EventList from './Components/EventList/EventList';
import EventDetails from './Components/EventDetails/EventDetails';
import NotFound from './Components/Error/NotFound';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<EventList />} loader={eventsLoader} />
        <Route
          path=":id"
          element={<EventDetails />}
          loader={eventDetailsLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
