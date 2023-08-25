
import styles from '../styles';

type PasswordProps = {
  label: string,
  name: string,
  errorValue?: string | undefined,
  placeHolder: string,
  reactHookRegister: any,
}

const Password = ({ label, name, errorValue, placeHolder, reactHookRegister}: PasswordProps) => {
  return (
    <div className={styles.forms.layout.inputContainer}>
      <label className={styles.forms.label} htmlFor={name}>
        { label }
      </label>
      <input
        type="password"
        placeholder={placeHolder}
        {...reactHookRegister}
        className={styles.forms.text}
      />
      {errorValue && (
        <span className={styles.forms.errorText}>
          {errorValue}
        </span>
      )}
    </div>
  );
}

export default Password;