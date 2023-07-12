import { Link } from '@remix-run/react';
import FancyPantsyMenuButton from './FancyPantsyMenuButton';
import { useState } from 'react';

interface Menu {
  pos: number;
}
{
  /*       <FancyPantsyMenuButton
        active={pos > 300 ? true : false}
        addStyle={'ml-20'}
        clicked={clicked}
        setClicked={setClicked}
      /> */
}

const Header = ({ pos }: Menu) => {
  const active = pos > 300 ? true : false;
  const top = pos === 0 ? true : false;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`w-full bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100% sticky top-0 transition-header duration-500 ease-in-out shadow-xl ${
        active ? 'opacity-100 h-[68px]' : 'opacity-0 h-0'
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
