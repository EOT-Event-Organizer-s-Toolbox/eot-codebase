import { UseFormRegisterReturn } from 'react-hook-form';

type PasswordProps = {
  label: string;
  errorValue?: string | undefined;
  placeHolder: string;
  register: UseFormRegisterReturn;
};

function Password({ label, errorValue, placeHolder, register }: PasswordProps) {
  return (
    <div className="flex flex-col pb-4">
      <label className="font-bold text-lg" htmlFor={register.name}>
        {label}
      </label>
      <input
        type="password"
        placeholder={placeHolder}
        {...register}
        className="autofill:bg-light p-2 bg-white text-xl"
      />
      {errorValue && (
        <span className="">{errorValue}</span>
      )}
    </div>
  );
}

export default Password;
