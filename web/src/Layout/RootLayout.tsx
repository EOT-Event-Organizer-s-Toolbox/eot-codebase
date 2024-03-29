import { Outlet, useNavigate } from 'react-router-dom';
import logo from '/eotlogo_white.svg';
import authService from '../Services/authService';
import { useQueryClient } from '@tanstack/react-query';

const RootLayout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await authService.logout();
      queryClient.invalidateQueries();
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

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
        <button className="text-white uppercase" onClick={logout}>
          Logout
        </button>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
