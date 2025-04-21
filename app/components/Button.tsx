import type { ReactNode } from 'react';

interface ButtonInterface {
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  fullWidth?: boolean;
  design?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ type, fullWidth, children, design, disabled = false, onClick }: ButtonInterface) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg  font-semibold border-2 ${
        disabled
          ? 'bg-slate-500 border-slate-500'
          : 'text-primary hover:bg-primary hover:text-secondary bg-secondary  border-primary'
      } ${fullWidth ? 'w-full' : 'w-28'} min-w-min transitio-all duration-200 ease-in-out ${design}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
