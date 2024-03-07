import { ChangeEvent, InputHTMLAttributes, forwardRef } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  errors?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      className,
      errors,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`w-full ${className}`}>
        {label && (
          <p className="text-neutral-700 mb-2 text-sm font-semibold">{label}</p>
        )}
        <div className="relative">
          <input
            ref={ref}
            placeholder={placeholder ?? "Insert your value here..."}
            value={value}
            onChange={onChange}
            className="h-10 w-full rounded-full border border-neutral-200 bg-neutral-200 px-3 text-center text-sm  focus:outline-none"
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-10 top-3">{rightIcon}</div>
          )}
        </div>
        {errors && <p className="text-error-500 mt-2 text-xs">{errors}</p>}
      </div>
    );
  },
);

export default TextInput;
