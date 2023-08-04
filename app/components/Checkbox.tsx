import type { ChangeEvent, ReactElement } from 'react';
import { useState } from 'react';

interface Checkbox {
  label: ReactElement | string;
  setChecked: (arg0: boolean) => void;
}

const Checkbox = ({ label, setChecked }: Checkbox) => {
  const [check, setCheck] = useState(false);
  const handleChange = (e?: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const value = e.target.checked;
      setCheck(value);
      setChecked(value);
    } else {
      setCheck(!check);
      setChecked(!check);
    }
  };

  return (
    <div
      className="flex items-center gap-4 cursor-pointer select-none my-2"
      onClick={() => handleChange()}
    >
      <input
        type="checkbox"
        className="cursor-pointer appearance-none w-[20px] h-[20px] border-2 border-slate-500 rounded checked:bg-transparent bg-secondary shrink-0 checked:border-primary relative peer hover:border-primary transition-all duration-200 ease-in-out"
        checked={check}
        onChange={(e) => handleChange(e)}
        id="defaultCheckbox"
      />
      <label
        htmlFor="defaultCheckbox"
        className={`${
          !check ? 'opacity-70' : 'opacity-100'
        } transition-all duration-200 ease-in-out cursor-pointer`}
      >
        {label}
      </label>
      <svg
        className={`absolute w-[20px] h-[20px] hidden peer-checked:block pointer-events-none text-primary 
        ${
          check ? 'opacity-100' : 'opacity-0'
        } transition-all duration-200 ease-in-out`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Checkbox;
