import { UseFormRegisterReturn } from 'react-hook-form';

type PasswordProps = {
  label: string;
  errorValue?: string | undefined;
  placeHolder: string;
  register: UseFormRegisterReturn;
};

function Password({ label, errorValue, placeHolder, register }: PasswordProps) {
  return (
    <div className="">
      <label className="" htmlFor={register.name}>
        {label}
      </label>
      <input
        type="password"
        placeholder={placeHolder}
        {...register}
        className=""
      />
      {errorValue && (
        <span className="">{errorValue}</span>
      )}
    </div>
  );
}

export default Password;
