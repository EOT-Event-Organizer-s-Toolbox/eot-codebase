import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Text, Password } from './Shared/Forms';
import authService from '../Services/authService';

import styles from './Shared/styles';
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
      await authService.login({
        email: data.email,
        password: data.password,
      });

      navigate('/');
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  };

  return (
    <div className={`${styles.layout.container} max-sm max-w-4xl m-auto`}>
      <h1 className={styles.layout.headingMain}>Login to continue</h1>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(submitData)}
          className={styles.forms.layout.loginForm}
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
          <div className={styles.layout.buttonFooter}>
            <input className={styles.layout.buttons.primary} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
