import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main>
      <h1>Event Organizer's Toolbox</h1>
      <Outlet />
    </main>
  );
};

export default RootLayout;
