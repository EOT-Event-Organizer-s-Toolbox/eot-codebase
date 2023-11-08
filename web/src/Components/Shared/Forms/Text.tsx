import { UseFormRegisterReturn } from 'react-hook-form';

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
    <div className="">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        {...register}
        className=""
      />
      {errorValue && (
        <span className="">{errorValue}</span>
      )}
    </div>
  );
};

export default Text;
