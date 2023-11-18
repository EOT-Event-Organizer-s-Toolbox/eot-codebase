import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Text, Password } from './Shared/Forms';
import authService from '../Services/authService';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import LoadingButton from './Shared/LoadingButton';

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

  const [loading, setLoading] = useState(false);

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const submitData = async (data: LoginForm) => {
    setLoading(true);
    try {
      await authService.login({
        email: data.email,
        password: data.password,
      });
      queryClient.invalidateQueries();
      navigate('/');
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
    loading && setLoading(false);
  };

  return (
    <section className="flex flex-col justify-center items-center pt-7">
      <div className="flex justify-center align-middle flex-col w-full max-w-sm">
        <h1 className="font-bold text-2xl sm:text-3xl">Login to continue</h1>
        <div className="py-4">
          <form
            onSubmit={handleSubmit(submitData)}
            className="bg-white shadow-md border border-r border-light rounded-md p-4"
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
              <LoadingButton loading={loading} loadingMessage='Signing in...' action={handleSubmit(submitData)}> 
              Login 
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
