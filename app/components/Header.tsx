import { Link } from '@remix-run/react';
import FancyPantsyMenuButton from './FancyPantsyMenuButton';

interface Menu {
  pos: number;
}

const Header = ({ pos }: Menu) => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100% sticky top-0 transition-[height] duration-500 ease-in-out shadow-xl ${
        pos > 300 ? 'opacity-100 h-20' : 'opacity-0 h-0'
      }`}
    >
      <div className={`flex gap-7 justify-between`}>
        <FancyPantsyMenuButton
          active={pos > 300 ? true : false}
          addStyle={'ml-20'}
        />
        <div className="flex gap-9 mr-80">
          <Link to="#1">woot</Link>
          <div id="2">wat</div>
          <div id="3">dat</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
