import styles from '../styles';

type TextProps = {
  label: string;
  name: string;
  errorValue?: string | undefined;
  placeHolder: string;
  reactHookRegister: any;
};

const Text = ({
  label,
  name,
  errorValue,
  placeHolder,
  reactHookRegister,
}: TextProps) => {
  return (
    <div className={styles.forms.layout.inputContainer}>
      <label className={styles.forms.label} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        {...reactHookRegister}
        className={styles.forms.text}
      />
      {errorValue && (
        <span className={styles.forms.errorText}>{errorValue}</span>
      )}
    </div>
  );
};

export default Text;
