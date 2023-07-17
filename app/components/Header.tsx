import { Link } from '@remix-run/react';
import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';

interface GlowLink {
  text: string;
  to: string;
}

const GlowLink = ({ text, to = '' }: GlowLink) => {
  return (
    <div className="relative group group-hover:scale-125">
      <div className="absolute inset-0 py-[6px] bg-white rounded-3xl blur-lg opacity-10 group-hover:opacity-100 transition ease-in-out duration-200" />
      <Link
        className="relative bg-richBlack border-2 border-white py-[6px] px-[12px] rounded-3xl text-lg opacity-90 group-hover:opacity-100 transition ease-in-out duration-200"
        to={to}
      >
        {text}
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
      className={`w-full bg-richBlack ${
        sticky ? 'fixed top-0' : ''
      } transition-header duration-250 ease-in-out shadow-xl ${
        clicked ? 'opacity-100 h-[64px]' : 'opacity-0 h-0'
      }`}
    >
      <div className="flex justify-between h-full items-center text-white mx-40">
        <Link to={'/'}>
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={webpawLogo} alt="webpaw logo" className="h-[60px]" />
            <img src={webpawFont} alt="webpaw font" className="h-[30px]" />
            <img
              src={solutionsFont}
              alt="solutions font"
              className="h-[30px]"
            />
          </div>
        </Link>
        <div className="flex justify-end">
          <GlowLink text="About" to="/about" />
          <GlowLink text="Projects" />
          <GlowLink text="Contact" to="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Header;
