type CaptchaViewProps = { captchaNumbers: number[] };

const CaptchaView = ({ captchaNumbers }: CaptchaViewProps) => {
  return (
    <div className="flex gap-8 flex-row">
      {captchaNumbers.map((number, idx) => (
        <div
          className="bg-slate-700 border text-slate-200 cursor-pointer
                    border-slate-500  hover:border-primary
                     rounded-lg transition-all duration-200 ease-in-out focus:ring-1 outline-none block text-5xl w-12 text-center"
          key={idx}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default CaptchaView;
