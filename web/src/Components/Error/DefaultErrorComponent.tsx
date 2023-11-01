import { Link, Navigate, useRouteError } from 'react-router-dom';
import {
  NotFoundError,
  UnauthorizedError,
} from '../../Services/loaderFunctions';
import NotFound from './NotFound';

export default function DefaultErrorComponent() {
  const error = useRouteError();
  if (error instanceof UnauthorizedError) {
    return <Navigate to="/login" />;
  }
  if (error instanceof NotFoundError) {
    return <NotFound />;
  }
  return (
    <main>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <Link to="/">Back to home</Link>
    </main>
  );
}
