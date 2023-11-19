import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Text, Password } from './Shared/Forms';
import { NewUserForm, User } from '../types';
import { useNavigate } from 'react-router-dom';
import authService from '../Services/authService';

const validationSchema = z
  .object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password is required'),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  });

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserForm>({
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitData = async (data: NewUserForm) => {
    try {
      const response: User | undefined = await authService.register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      if (!response) {
        throw new Error('Registration failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
    navigate('/');
  };

  return (
    <div className="max-sm max-w-4xl m-auto">
      <h1 className="">Create an account</h1>
      <div className="py-4">
        <form
          onSubmit={handleSubmit(submitData)}
          className=""
        >
          <Text
            label="First Name"
            name="firstName"
            placeHolder="Enter your first name"
            errorValue={errors.firstName?.message}
            register={register('firstName')}
          />
          <Text
            label="Last Name"
            name="lastName"
            placeHolder="Enter your last name"
            errorValue={errors.lastName?.message}
            register={register('lastName')}
          />
          <Text
            label="Email"
            name="email"
            placeHolder="Enter your email"
            errorValue={errors.email?.message}
            register={register('email')}
          />
          <Password
            label="Set a Password"
            placeHolder=""
            errorValue={errors.password?.message}
            register={register('password')}
          />
          <Password
            label="Confirm Password"
            placeHolder=""
            errorValue={errors.passwordConfirmation?.message}
            register={register('passwordConfirmation')}
          />
          <div className="">
            <input className="" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
