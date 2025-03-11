type FormInputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className: string;
  type: string;
  value: string | number;
};

export default function FormInput({
  value,
  handleInputChange,
  name,
  className,
  type,
}: FormInputProps) {
  return (
    <label htmlFor={name}>
      <input
        id={name}
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
}
