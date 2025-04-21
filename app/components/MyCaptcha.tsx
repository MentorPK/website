import { useEffect, useState } from 'react';
import CaptchaGen from './CaptchaView';
import CaptchaInput from './CaptchaInput';

type MyCaptchaProps = {
  validateCaptcha: (captcha: number, captchaInput: number) => void;
};

const MyCaptcha = ({ validateCaptcha }: MyCaptchaProps) => {
  const [captcha, setCaptcha] = useState<number[]>([]);
  const captchaNumbers = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
  const splitNumbers = () => {
    return captchaNumbers
      .toString()
      .split('')
      .map(number => parseInt(number));
  };

  useEffect(() => {
    setCaptcha(splitNumbers());
  }, []);

  return (
    <div>
      <CaptchaGen captchaNumbers={captcha} />
      <CaptchaInput name="captcha" captchaNumbers={captcha} validateCaptcha={validateCaptcha} />
    </div>
  );
};

export default MyCaptcha;
