"use client";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface InternationalPhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  defaultCountry?: string;
  className?: string;
  placeholder?: string;
}

export const InternationalPhoneInput = ({
  value,
  onChange,
  defaultCountry = "ng",
  className = "",
  placeholder = "Phone / WhatsApp",
}: InternationalPhoneInputProps) => {
  return (
    <div className={`international-phone-wrapper ${className}`}>
      <PhoneInput
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full"
        inputClassName="!w-full !h-[46px] !rounded-r-lg !border-y !border-r !border-[#c9c4d8] !bg-[#f9f9f9] !px-4 !py-3 !text-sm !text-[#1a1c1c] focus:!outline-none focus:!ring-2 focus:!ring-[#5f3add] !font-normal"
        countrySelectorStyleProps={{
          buttonClassName:
            "!h-[46px] !rounded-l-lg !border-y !border-l !border-r-0 !border-[#c9c4d8] !bg-[#f9f9f9] !px-3 hover:!bg-slate-100 transition-colors",
          dropdownStyleProps: {
            className:
              "!bg-white !border !border-[#c9c4d8] !rounded-lg !shadow-xl !text-[#1a1c1c] !text-sm !z-50 !max-h-60 !overflow-y-auto",
          },
        }}
      />
    </div>
  );
};
