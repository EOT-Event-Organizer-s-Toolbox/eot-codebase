import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../styles';

type TextProps = {
  label: string;
  name: string;
  errorValue?: string | undefined;
  placeHolder: string;
  register: UseFormRegisterReturn;
};

const Text = ({
  label,
  name,
  errorValue,
  placeHolder,
  register,
}: TextProps) => {
  return (
    <div className={styles.forms.layout.inputContainer}>
      <label className={styles.forms.label} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        {...register}
        className={styles.forms.text}
      />
      {errorValue && (
        <span className={styles.forms.errorText}>{errorValue}</span>
      )}
    </div>
  );
};

export default Text;
