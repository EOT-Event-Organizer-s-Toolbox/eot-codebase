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
    <div className="flex flex-col pb-4">
      <label className="text-lg font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        {...register}
        className="p-2 bg-white text-xl"
      />
      {errorValue && (
        <span className="text-primary">{errorValue}</span>
      )}
    </div>
  );
};

export default Text;
