import styles from '../styles';
import { UseFormRegisterReturn } from 'react-hook-form';

type PasswordProps = {
  label: string;
  errorValue?: string | undefined;
  placeHolder: string;
  register: UseFormRegisterReturn;
};

function Password({ label, errorValue, placeHolder, register }: PasswordProps) {
  return (
    <div className={styles.forms.layout.inputContainer}>
      <label className={styles.forms.label} htmlFor={register.name}>
        {label}
      </label>
      <input
        type="password"
        placeholder={placeHolder}
        {...register}
        className={styles.forms.text}
      />
      {errorValue && (
        <span className={styles.forms.errorText}>{errorValue}</span>
      )}
    </div>
  );
}

export default Password;
