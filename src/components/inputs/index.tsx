import React, { HTMLInputTypeAttribute } from "react";

interface IInput {
  name: string;
  value?: string;
  label?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<IInput> = ({
  name,
  label,
  value,
  onChange,
  className,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className={className}>
      {!!label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-90 "
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder || label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
