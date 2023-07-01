import { Outlet } from 'react-router-dom';
import logo from '/eotlogo_white.svg';

const RootLayout = () => {
  return (
    <main>
      <header className="flex flex-row align-middle gap-3 p-2 bg-zinc-700">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <p className="max-sm:hidden md:text-lg font-black place-self-center text-white uppercase">
          Event Organizer's Toolbox
        </p>
      </header>
      <Outlet />
    </main>
  );
};

export default RootLayout;
