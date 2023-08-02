import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';
import { HeaderMenuItems } from './Header';
import useWindowWidth from '~/hooks/useWindowWidth';
import useScrollPosition from '~/hooks/useScrollPosition';
//Font design from https://www.fontspace.com/4-brain-font-f52281
const Banner = () => {
  const isMobile = useWindowWidth(true);
  const position = useScrollPosition();
  const transform = position > 0;

  return (
    <div
      className={`${
        transform ? 'h-[64px]' : 'h-[350px]'
      }  flex md:flex-row flex-col md:gap-8 gap-2 justify-center items-center bg-richBlack transition-nHeader duration-300 ease-in-out fixed w-screen top-0`}
    >
      {!isMobile && (
        <HeaderMenuItems addStyles={`absolute top-[12px] md:right-40 z-40`} />
      )}
      <img
        src={webpawLogo}
        alt="webpaw logo"
        className={`${
          transform ? 'md:max-h-[60px]' : 'md:max-h-[250px]'
        } max-h-[200px] transition-nHeader duration-300 ease-in-out`}
      />
      <div className="flex md:flex-row flex-col gap-2 md:gap-6">
        <img
          src={webpawFont}
          alt="webpaw font"
          className={`${
            transform ? 'max-h-[30px]' : 'max-h-[42px]'
          } transition-nHeader duration-300 ease-in-out`}
        />
        <img
          src={solutionsFont}
          alt="solutions font"
          className={`${
            transform ? 'max-h-[30px]' : 'max-h-[42px]'
          } transition-nHeader duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
};

export default Banner;
