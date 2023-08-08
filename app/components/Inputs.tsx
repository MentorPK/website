import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface InputInterface {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  //only fontawesome types
  icon?: IconDefinition;
}

const Input = ({
  name,
  type,
  label,
  placeholder,
  error,
  defaultValue,
  icon,
}: InputInterface) => {
  return (
    <div>
      <label
        className={`block my-2 font-medium ${error ? 'text-errorRed' : ''}`}
      >
        {label}
      </label>
      <div>
        {type === 'text' ? (
          <div className="relative">
            <input
              name={name}
              className={`bg-slate-700 border text-slate-200 peer ${
                error
                  ? 'border-errorRed focus:ring-errorRed'
                  : 'border-slate-500 focus:ring-primary focus:border-primary hover:border-primary'
              } w-full rounded-lg p-2.5 pr-12 transition-all duration-200 ease-in-out focus:ring-1 outline-none block `}
              placeholder={placeholder}
              defaultValue={defaultValue}
            />
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                className="w-6 h-6 text-slate-500 peer-focus:text-primary absolute pr-4 top-0 pt-[10px] right-0 align-center transition-all duration-200 ease-in-out"
              />
            )}
          </div>
        ) : (
          <textarea
            name="message"
            className={`bg-slate-700 border text-slate-200 h-[160px] ${
              error
                ? 'border-errorRed focus:ring-errorRed'
                : 'border-slate-500 focus:ring-primary focus:border-primary hover:border-primary'
            } w-full rounded-lg p-2.5 transition-all duration-200 ease-in-out focus:ring-1 outline-none block `}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
      </div>
      {error && <div className="mt-2 text-errorRed">{error}</div>}
    </div>
  );
};

export default Input;
