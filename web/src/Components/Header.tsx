import { useNavigate } from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { userQuery } from '../Services/loaderFunctions';
import authService from '../Services/authService';
import Avatar from './Avatar';

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const {data: user, isLoading} = useQuery(userQuery)
  
  const logout = async () => {
    try {
      await authService.logout();
      queryClient.removeQueries();      
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

  const login = () => {
    navigate('/login');
  }
  console.log(user);

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
        {isLoading ? null : !user
          ? <button className="text-white" onClick={login}>Login</button>
          : <button className="text-white" onClick={logout}>Logout</button>
        }
        {isLoading ? null : !user && <Avatar user={user} />}
      </div>
    </header>
  )

}

export default Header