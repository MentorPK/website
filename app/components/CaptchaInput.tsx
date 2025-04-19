import { useEffect, useState } from "react";

interface InputInterface {
  name: string;
  defaultValue?: string;
}

const CaptchaInput = ({name, defaultValue}: InputInterface) => {
    const [captcha, setCaptcha] = useState<string[]>([]);
    const arr = new Array(5).fill(0);
    const captchaNumbers = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

    const splitNumbers = () => {
        return captchaNumbers.toString().split('');
    }

    useEffect(() => {
        setCaptcha(splitNumbers());
    }, [])

    return (
        <div className="flex flex-row gap-8 justify-center">
            {captcha}
            {arr.map((_, index) => (
                            <input
                            key={index}
                            name={name}
                            className="bg-slate-700 border text-slate-200 peer 
                              'border-slate-500 focus:ring-primary focus:border-primary hover:border-primary'
                              rounded-lg transition-all duration-200 ease-in-out focus:ring-1 outline-none block text-5xl w-12 text-center caret-transparent"
                            defaultValue={defaultValue}
                            maxLength={1}
                        />
            ))}
        </div>
    )
};

export default CaptchaInput;