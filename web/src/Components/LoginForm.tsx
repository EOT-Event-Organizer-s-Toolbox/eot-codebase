import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Text, Password } from './Shared/Forms';
import authService from '../Services/authService';
import { useNavigate } from 'react-router-dom';

const validationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitData = async (data: LoginForm) => {
    try {
      const user = await authService.login({
        email: data.email,
        password: data.password,
      });
      navigate('/');
      console.log('user:', user)
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  };

  return (
    <div className="">
      <h1 className="">Login to continue</h1>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(submitData)}
          className=""
        >
          <Text
            label="Email"
            name="email"
            placeHolder="Enter your email"
            errorValue={errors.email?.message}
            register={register('email')}
          />
          <Password
            label="Password"
            placeHolder="Enter your password"
            errorValue={errors.password?.message}
            register={register('password')}
          />
          <div className="">
            <input className="" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
