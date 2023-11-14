import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

type LoginLogoutProps = {
  me: { id: number; firstName: string; lastName: string } | null;
  loading: boolean;
}

const LoginLogout = ({ me, loading }: LoginLogoutProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await authService.logout();
      queryClient.invalidateQueries();
      // for testing (delete this when better solution is found)
      navigate('/login');
    } catch (e) {
      console.error(e);
    }
  };

  const login = () => {
    navigate('/login');
  }

  if(loading) return null;

  if(!me){
    return (
      <button className="text-white" onClick={login}>
          Login
      </button>
      
    )
  }

  return (
    <button className="text-white" onClick={logout}>
      Logout
    </button>
  )

}

export default LoginLogout