import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CustomInputProps {
  name: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
}

const CustomInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}: CustomInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Field>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={8}
          required={required}
          disabled={disabled}
          className="min-h-40 rounded-sm border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0! transition-all duration-200 focus:scale-[1.01] focus:border-[#7C5CFC]! focus:ring-2 focus:ring-[#7C5CFC]/20 disabled:cursor-not-allowed disabled:opacity-50"
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          className="h-auto rounded-sm border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0! transition-all duration-200 focus:scale-[1.01] focus:border-[#7C5CFC]! focus:ring-2 focus:ring-[#7C5CFC]/20 disabled:cursor-not-allowed disabled:opacity-50"
        />
      )}
    </Field>
  );
};

export default CustomInput;
