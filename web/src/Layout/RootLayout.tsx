import { Outlet } from 'react-router-dom';
import Header from '../Components/Header.tsx';



const RootLayout = () => {
  return (
    <>
      <Header />

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
