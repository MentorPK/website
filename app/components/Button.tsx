import type { ReactNode } from 'react';

interface ButtonInterface {
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  fullWidth?: boolean;
  design: string;
  onClick?: () => void;
}

const Button = ({
  type,
  fullWidth,
  children,
  design,
  onClick,
}: ButtonInterface) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg text-black font-semibold bg-primary ${
        fullWidth ? 'w-full' : 'w-28'
      } min-w-min transitio-all duration-200 ease-in-out hover:scale-110 ${design}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
