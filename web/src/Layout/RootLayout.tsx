import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main>
      <p>Event Organizer's Toolbox</p>
      <Outlet />
    </main>
  );
};

export default RootLayout;
