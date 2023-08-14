import { Outlet, useNavigate } from 'react-router-dom';
import logo from '/eotlogo_white.svg';

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex flex-row align-middle gap-3 p-2 bg-zinc-700">
        <img
          src={logo}
          onClick={() => navigate('/')}
          alt="logo"
          className="w-10 h-10 cursor-pointer"
        />
        <p className="max-sm:hidden md:text-lg font-black place-self-center text-white uppercase">
          Event Organizer's Toolbox
        </p>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
