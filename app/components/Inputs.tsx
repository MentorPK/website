interface InputInterface {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
}

const Input = ({
  name,
  type,
  label,
  placeholder,
  error,
  defaultValue,
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
          <input
            name={name}
            className={`bg-slate-700 border text-slate-200  ${
              error
                ? 'border-errorRed focus:ring-errorRed'
                : 'border-slate-500 focus:ring-primary focus:border-primary hover:border-primary'
            } w-full rounded-lg p-2.5 transition-all duration-200 ease-in-out focus:ring-1 outline-none block `}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        ) : (
          <textarea
            name="message"
            className={`bg-slate-700 border text-slate-200  ${
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
