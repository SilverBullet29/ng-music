import { useMemo, ButtonHTMLAttributes } from "react";
import { Spinner } from "flowbite-react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  isFull?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  variant?: ButtonVariant;
}

const EnumVariant: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-primary-500 to-primary-400 text-neutral-100 ",
  secondary: "bg-primary-300 text-neutral-100 ",
  tertiary: "bg-neutral-300 text-neutral-400",
};

const Button: React.FC<Props> = ({
  children,
  isFull,
  className,
  isLoading,
  disabled,
  variant = "primary",
  ...props
}) => {
  const label = useMemo(() => {
    if (isLoading) {
      return <Spinner color="pink" aria-label="Default status example" />;
    }
    if (typeof children === "string") {
      return <p className="text-xs tracking-widest">{children}</p>;
    }
    return children;
  }, [isLoading, children]);

  const style = disabled
    ? `${EnumVariant[variant]} cursor-not-allowed `
    : `${EnumVariant[variant]} cursor-pointer hover:scale-105`;

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`h-10 transform rounded-full px-4 font-medium duration-300 ease-in-out focus:outline-none ${style} ${className} ${isFull ? "w-full" : "w-fit"}`}
    >
      {label}
    </button>
  );
};

export default Button;
