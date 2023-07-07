interface InputInterface {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const Input = ({ name, type, label, placeholder }: InputInterface) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        {type === 'text' ? (
          <input
            name={name}
            className="bg-slate-700 border text-slate-200 border-slate-500 w-full rounded-lg p-2.5 transition-all duration-200 ease-in-out focus:border-primary focus:ring-1 focus:ring-primary outline-none block"
            placeholder={placeholder}
          />
        ) : (
          <textarea
            name="message"
            className="bg-slate-700 border text-slate-200 border-slate-500 w-full rounded-lg p-2.5 transition-all duration-200 ease-in-out focus:border-primary focus:ring-1 focus:ring-primary outline-none block"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
