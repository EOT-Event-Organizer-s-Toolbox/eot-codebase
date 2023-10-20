import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Text, Password } from './Shared/Forms';
import { NewUser } from '../types';

import styles from './Shared/styles';
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
  const { register, handleSubmit, formState: { errors }, } = useForm<NewUser>({
    resolver: zodResolver(validationSchema),
  });

  const navigate = useNavigate();

  const submitData = async (data: NewUser) => {
    console.log(data);
    navigate('/');
  }
  
  return (
    <div className={`${styles.layout.container} max-sm max-w-4xl m-auto`}>
      <h1 className={styles.layout.headingMain}>Create an account</h1>
      <div className="py-4">
        <form onSubmit={handleSubmit(submitData)} className={styles.forms.layout.loginForm}>
          <Text
            label='First Name'
            name='firstName'
            placeHolder='Enter your first name'
            errorValue={errors.firstName?.message as string}
            reactHookRegister={register('firstName')}
          />
          <Text
            label='Last Name'
            name='lastName'
            placeHolder='Enter your last name'
            errorValue={errors.lastName?.message as string}
            reactHookRegister={register('lastName')}
          />
          <Text
            label='Email'
            name='email'
            placeHolder='Enter your email'
            errorValue={errors.email?.message as string}
            reactHookRegister={register('email')}
          />
          <Password
            label='Set a Password'
            name='password'
            placeHolder=''
            errorValue={errors.password?.message as string}
            reactHookRegister={register('password')}
          />
          <Password
            label='Confirm Password'
            name='passwordConfirmation'
            placeHolder=''
            errorValue={errors.passwordConfirmation?.message as string}
            reactHookRegister={register('passwordConfirmation')}
          />
          <div className={styles.layout.buttonFooter}>
            <input
              className={styles.layout.buttons.primary}
              type="submit"
            />
          </div>
        </form>
      </div>
      
    </div>
  )
};

export default RegistrationForm;