import { useNavigate } from 'react-router-dom';

import Avatar from './Avatar';
import LoginLogout from './LoginLogout';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-row items-center justify-between gap-3 py-4 px-3 bg-primary">
      <nav>
        <img
          src="/eotlogo_white.svg"
          onClick={() => navigate('/')}
          alt="logo"
          className="w-10 h-10 cursor-pointer"
        />
      </nav>
      <div className='flex gap-2 '>
        <LoginLogout />
        <Avatar/>
      </div>
    </header>
  )

}

export default Header