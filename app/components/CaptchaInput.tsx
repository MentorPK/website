import { useState } from 'react';
import Button from './Button';

interface InputInterface {
  name: string;
  captchaNumbers: number[];
  validateCaptcha: (captcha: number, captchaInput: number) => void;
}

const CaptchaInput = ({ name, captchaNumbers, validateCaptcha }: InputInterface) => {
  const [inputValue, setInputValue] = useState<string[]>(['', '', '', '', '']);
  const arr = new Array(5).fill(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;
    const updatedValue = inputValue.map((item, index) => (index === idx ? value : item));
    setInputValue(updatedValue);

    const captchaString = captchaNumbers.join('');
    const captchaStringToNumb = parseInt(captchaString, 10);
    const captchaInput = updatedValue.join('');
    const captchaInputToNumb = parseInt(captchaInput, 10);
    validateCaptcha(captchaStringToNumb, captchaInputToNumb);
  };

  const handleClick = () => {
    setInputValue(['', '', '', '', '']);
  };

  return (
    <div className="flex flex-row gap-8 justify-center">
      {arr.map((_, index) => (
        <input
          key={index}
          name={name}
          className="bg-slate-700 border text-slate-200 peer 
                    border-slate-500 focus:ring-primary focus:border-primary hover:border-primary
                     rounded-lg transition-all duration-200 ease-in-out focus:ring-1 outline-none block text-5xl w-12 text-center caret-transparent"
          maxLength={1}
          value={inputValue[index]}
          onChange={e => handleInputChange(e, index)}
        />
      ))}
      <Button onClick={handleClick} type="button">
        Reset
      </Button>
    </div>
  );
};

export default CaptchaInput;
