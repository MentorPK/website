import { Link } from '@remix-run/react';

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
  clicked: boolean;
}

// gradient heaqder color bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100%
const Header = ({ clicked }: HeaderInterface) => {
  return (
    <div
      className={`w-full bg-richBlack fixed top-0 transition-header duration-250 ease-in-out shadow-xl ${
        clicked ? 'opacity-100 h-[64px]' : 'opacity-0 h-0'
      }`}
    >
      <div className="flex h-full justify-end gap-14 mr-14 items-center text-white ">
        <GlowLink text="About" />
        <GlowLink text="Projects" />
        <GlowLink text="Contact" to="/contact" />
      </div>
    </div>
  );
};

export default Header;
