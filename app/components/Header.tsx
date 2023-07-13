import { Link } from '@remix-run/react';

interface Menu {
  clicked: boolean;
}

const Header = ({ clicked }: Menu) => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100% fixed top-0 transition-header duration-250 ease-in-out shadow-xl ${
        clicked ? 'opacity-100 h-[68px]' : 'opacity-0 h-0'
      }`}
    >
      <div className="flex gap-9 mr-80">
        <Link to="#1">woot</Link>
        <div id="2">wat</div>
        <div id="3">dat</div>
      </div>
    </div>
  );
};

export default Header;
