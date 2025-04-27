import { useState } from 'react';
import CaptchaCards from './CaptchaCards';
import CaptchaInput from './CaptchaInput';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
type MyCaptchaProps = {
  validateCaptcha: (captcha: number, captchaInput: number) => void;
  setWasGenerated: (wasGenerated: boolean) => void;
  wasGenerated: boolean;
};

const MyCaptcha = ({ validateCaptcha, setWasGenerated, wasGenerated }: MyCaptchaProps) => {
  const [captcha, setCaptcha] = useState<number[]>([]);
  const captchaNumbers = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  const [inputValue, setInputValue] = useState<string[]>(['', '', '', '', '']);

  const splitNumbers = () => {
    return captchaNumbers
      .toString()
      .split('')
      .map(number => parseInt(number));
  };

  const handleGenerateCaptcha = () => {
    setCaptcha(splitNumbers());
    setWasGenerated(true);
  };
  const resetCaptcha = () => {
    setCaptcha(splitNumbers());
    setInputValue(['', '', '', '', '']);
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="border-2 border-primary rounded-lg p-4 flex items-center gap-4">
        <FontAwesomeIcon icon={faTriangleExclamation} className="w-10 h-10 text-primary" />
        <div>
          <ol>
            <li>1. Click the Generate button to display the CAPTCHA cards.</li>
            <li>2. Click and hold on the CAPTCHA card to reveal the number behind the card.</li>
            <li>3. Enter the revealed number in the input field below.</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        {wasGenerated ? (
          <Button onClick={resetCaptcha} design="flex justify-between items-center gap-2">
            Refresh
            <FontAwesomeIcon icon={faRotateRight} />
          </Button>
        ) : (
          <Button onClick={handleGenerateCaptcha}>Generate</Button>
        )}
      </div>
      {wasGenerated && (
        <>
          <CaptchaCards captchaNumbers={captcha} />
          <CaptchaInput
            name="captcha"
            captchaNumbers={captcha}
            validateCaptcha={validateCaptcha}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </>
      )}
    </div>
  );
};

export default MyCaptcha;
