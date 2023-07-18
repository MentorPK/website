import { Link } from '@remix-run/react';
import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';

interface HeaderMenuItems {
  addStyles?: string;
}
export const HeaderMenuItems = ({ addStyles }: HeaderMenuItems) => {
  return (
    <div className={`flex justify-end md:gap-6 gap-2 ${addStyles}`}>
      <Link className="headerMenuItem" to="/about">
        About
      </Link>
      <Link className="headerMenuItem" to="/projects">
        Projects
      </Link>
      <Link className="headerMenuItem" to="/contact">
        Contact
      </Link>
    </div>
  );
};

interface HeaderInterface {
  clicked?: boolean;
  sticky?: boolean;
}

// gradient heaqder color bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100%
const Header = ({ clicked, sticky }: HeaderInterface) => {
  return (
    <div
      className={`w-full bg-richBlack sticky top-0
      } transition-header duration-250 ease-in-out shadow-xl ${
        clicked ? 'opacity-100 h-[64px]' : 'opacity-0 h-0'
      }`}
    >
      <div className="flex justify-between h-full items-center text-white md:mx-40">
        <Link to={'/'} className="">
          <div className="flex flex-row justify-center items-center gap-4">
            <img src={webpawLogo} alt="webpaw logo" className="h-[60px]" />
            <div className="md:flex flex-row gap-2 hidden">
              <img src={webpawFont} alt="webpaw font" className="h-[30px]" />
              <img
                src={solutionsFont}
                alt="solutions font"
                className="h-[30px]"
              />
            </div>
          </div>
        </Link>
        <HeaderMenuItems />
      </div>
    </div>
  );
};

export default Header;
