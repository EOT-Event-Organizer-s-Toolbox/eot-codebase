import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Oops! Page not found!</h2>
      <Link to="/">Return to Events List Page</Link>
    </>
  );
};

export default NotFound;
