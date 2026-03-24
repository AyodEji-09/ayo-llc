import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CustomInputProps {
  name: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder: string;
}

const CustomInput = ({ name, type, placeholder }: CustomInputProps) => {
  return (
    <Field>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={8}
          required
          className="min-h-40 rounded-sm border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="h-auto rounded-sm border-[#D1D5DB]! p-3.75 text-[#575756] placeholder-[#9CA3AF] shadow-none ring-0!"
        />
      )}
    </Field>
  );
};

export default CustomInput;
