import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

const LoginLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getUser = async () => {
    const user = await authService.getUser()
      console.log('testuser:', user)
  }

  const logout = async () => {
    console.log('logout')
    try {
      await authService.logout();
      queryClient.invalidateQueries();
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

  const LoggedIn = false

  if(!LoggedIn){
    return (
      <>
      <button className="text-white" onClick={getUser}>
          GET USER
      </button> 
      <button className="text-white" onClick={logout}>
          Login
      </button>
      </>
      
    )
  }

  return (
    <button className="text-white" onClick={logout}>
      Logout
    </button>
  )

}

export default LoginLogout