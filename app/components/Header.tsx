import { Link, useMatches } from '@remix-run/react';
import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';
import type FancyPantsyMenuButton from './FancyPantsyMenuButton';
import useScrollPosition from '~/hooks/useScrollPosition';
import { useEffect, useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowWidth from '~/hooks/useWindowWidth';

interface MenuButton {
  pos: number;
  addStyle?: string;
  clicked: boolean;
  setClicked: (arg0: boolean) => void;
  bPos?: number;
}

const MenuButton = ({
  pos,
  clicked,
  setClicked,
  bPos = 0,
}: FancyPantsyMenuButton) => {
  const active = pos > bPos - 40 ? true : false;
  const inactive = pos < bPos - 40 ? true : false;

  useEffect(() => {
    inactive && setClicked(false);
  });
  return (
    <div
      className={`fixed z-10 top-[14px] md:left-10 right-2 ${
        active ? 'opacity-100' : inactive ? 'opacity-0' : ''
      }`}
    >
      {!clicked ? (
        <button onClick={() => setClicked(!clicked)} disabled={!active}>
          <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-white" />
        </button>
      ) : (
        <button onClick={() => setClicked(!clicked)} disabled={!active}>
          <FontAwesomeIcon icon={faXmark} className="w-10 h-10 text-white" />
        </button>
      )}
    </div>
  );
};

interface HeaderMenuItems {
  addStyles?: string;
}
export const HeaderMenuItems = ({ addStyles }: HeaderMenuItems) => {
  return (
    <div
      className={`flex justify-end lg:gap-10 md:gap-4 sm:gap-4 gap-2 ${addStyles}`}
    >
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
  bPos?: number;
}

// gradient heaqder color bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100%
const Header = ({ bPos = 0 }: HeaderInterface) => {
  const [clicked, setClicked] = useState(true);
  const matchRoot = useMatches()[1].pathname === '/' ? true : false;
  const pos = useScrollPosition();
  return (
    <>
      <div
        className={`w-full bg-richBlack ${
          matchRoot ? 'fixed' : 'sticky'
        } top-0 transition-header duration-250 ease-in-out z-10
      }  shadow-xl ${clicked ? 'opacity-100 h-[64px]' : 'opacity-0 h-0'}`}
      >
        <div className="flex justify-between h-full items-center text-white lg:mx-40 md:mx-16 sm:mx-2 mx-2">
          <Link to={'/'}>
            <div className="flex flex-row justify-center items-center gap-4">
              <img
                src={webpawLogo}
                alt="webpaw logo"
                className="max-h-[60px]"
              />
              <div className="sm:flex flex-row gap-2 hidden">
                <img
                  src={webpawFont}
                  alt="webpaw font"
                  className="max-h-[30px]"
                />
                <img
                  src={solutionsFont}
                  alt="solutions font"
                  className="max-h-[30px]"
                />
              </div>
            </div>
          </Link>
          <HeaderMenuItems />
        </div>
      </div>
      {/*       {matchRoot && (
        <FancyPantsyMenuButton
          pos={pos}
          addStyle={'ml-20'}
          clicked={clicked}
          setClicked={setClicked}
          bPos={bPos}
        />
      )} */}
      {matchRoot && (
        <MenuButton
          pos={pos}
          bPos={bPos}
          clicked={clicked}
          setClicked={setClicked}
        />
      )}
    </>
  );
};

export default Header;
