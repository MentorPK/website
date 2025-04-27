import { motion } from 'framer-motion';
import webpawLogo from '../images/webpawLogo.png';
import { useState } from 'react';

type CaptchaViewProps = { captchaNumbers: number[] };

const CardSideStyle = `h-full w-full absolute flex items-center justify-center rounded-lg pointer-events-none select-none`;

const CaptchaCards = ({ captchaNumbers }: CaptchaViewProps) => {
  const [numberInView, setNumberInView] = useState(0);
  const renderNumber = (idx: number): void => {
    setNumberInView(captchaNumbers[idx]);
  };

  return (
    <div className="flex gap-3 flex-row justify-center">
      {captchaNumbers.map((number, idx) => (
        <motion.div
          onMouseDown={() => renderNumber(idx)}
          onTouchStart={() => renderNumber(idx)}
          key={idx}
          whileTap="rotate"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-[56px] h-[80px] relative"
          style={{
            transformStyle: 'preserve-3d',
            translateZ: '1px'
          }}
          initial="initial"
          variants={{
            initial: { rotateY: 180 },
            rotate: { rotateY: 360, scale: 1.2 }
          }}
        >
          {/* Somehow the child elements need also the perserve-3d for firefox only */}
          <div
            className={`${CardSideStyle} bg-richBlack border-primary border-2 p-1`}
            style={{
              transform: 'rotateY(180deg)',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            <img src={webpawLogo} alt="webpaw logo" className="w-full" />
          </div>
          <div
            className={`${CardSideStyle} bg-primary text-secondary text-5xl font-bold`}
            style={{
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
          >
            {numberInView}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CaptchaCards;
