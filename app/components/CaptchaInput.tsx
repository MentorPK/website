interface InputInterface {
  name: string;
  captchaNumbers: number[];
  validateCaptcha: (captcha: number, captchaInput: number) => void;
  inputValue: string[];
  setInputValue: React.Dispatch<React.SetStateAction<string[]>>;
}

const CaptchaInput = ({
  name,
  captchaNumbers,
  validateCaptcha,
  inputValue,
  setInputValue
}: InputInterface) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;
    const lastStringChar = value[value.length - 1];
    const updatedValue = inputValue.map((item, index) => (index === idx ? lastStringChar : item));
    setInputValue(updatedValue);

    const captchaString = captchaNumbers.join('');
    const captchaStringToNumb = parseInt(captchaString, 10);
    const captchaInput = updatedValue.join('');
    const captchaInputToNumb = parseInt(captchaInput, 10);
    validateCaptcha(captchaStringToNumb, captchaInputToNumb);
  };

  return (
    <div className="flex flex-row gap-3 justify-center">
      {inputValue.map((item, index) => (
        <input
          key={index}
          name={name}
          className="bg-slate-700 border text-slate-200 peer 
                    border-slate-500 focus:ring-primary focus:border-primary hover:border-primary
                     rounded-lg transition-all duration-200 ease-in-out focus:ring-1 outline-none block text-5xl w-[56px] h-[80px] text-center caret-transparent"
          value={item}
          onChange={e => handleInputChange(e, index)}
        />
      ))}
    </div>
  );
};

export default CaptchaInput;
