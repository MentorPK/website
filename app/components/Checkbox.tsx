import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

interface Checkbox {
  label: ReactElement | string;
  setChecked: (arg0: boolean) => void;
}

const Checkbox = ({ label, setChecked }: Checkbox) => {
  const [check, setCheck] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setCheck(value);
    setChecked(value);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="appearance-none w-[20px] h-[20px] border-2 border-slate-500 rounded checked:bg-transparent bg-secondary shrink-0 checked:border-primary relative peer hover:border-primary transition-all duration-200 ease-in-out"
        onChange={(e) => handleChange(e)}
      />
      <label
        className={`${
          !check ? 'opacity-70' : 'opacity-100'
        } transition-all duration-200 ease-in-out`}
      >
        {label}
      </label>
      <svg
        className="absolute w-[20px] h-[20px] hidden peer-checked:block pointer-events-none text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Checkbox;
