import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import authService from '../Services/authService';

import Avatar from './Avatar';
import LoginLogout from './LoginLogout';

const Header = () => {
  const [me, setMe] = useState(null);
  // for lack of a better solution this is stopping the login button from flashing on load.
  const [loading, setLoading] = useState(true);

  const setUser = async () => {
    const user = await authService.me();
    setMe(user);
    setLoading(false);
  }

  useEffect (() =>{
    setUser();
  }, [])

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
        <LoginLogout me={me} loading={loading} />
        <Avatar user={me}/>
      </div>
    </header>
  )

}

export default Header