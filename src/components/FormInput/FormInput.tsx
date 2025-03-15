type FormInputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className: string;
  type: string;
  value: string | number;
  placeHolder: string;
};

export default function FormInput({
  value,
  handleInputChange,
  name,
  className,
  type,
  placeHolder,
}: FormInputProps) {
  return (
    <label className={`formLabel`} htmlFor={name}>
      <input
        id={name}
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </label>
  );
}
