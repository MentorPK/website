import { Link, useMatches } from '@remix-run/react';
import webpawLogo from '../images/webpawLogo.png';
import webpawFont from '../images/webpawFont.png';
import solutionsFont from '../images/solutionsFont.png';
import type FancyPantsyMenuButton from './FancyPantsyMenuButton';
import useScrollPosition from '~/hooks/useScrollPosition';
import { useEffect, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  bPos = 350,
}: FancyPantsyMenuButton) => {
  const active = pos > bPos - 40;
  useEffect(() => {
    !active && setClicked(false);
  }, [active, setClicked]);
  return (
    <div
      className={`fixed ${
        !clicked ? 'top-[14px]' : 'md:top-[14px] top-[64px]'
      } w-10 h-10 md:left-10 right-2 z-10 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {!clicked ? (
        <button
          onClick={() => setClicked(!clicked)}
          disabled={!active}
          aria-label="Open menu button"
        ></button>
      ) : (
        <button
          onClick={() => setClicked(!clicked)}
          disabled={!active}
          arial-label="Close menu button"
        >
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

// Hook
const useScrollProgress = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleScroll() {
      // Set window width/height to state
      // This will calculate how many pixels the page is vertically
      const winScroll = document.documentElement.scrollTop;
      // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // This will calculate the final total of the percentage of how much the user has scrolled.
      const scrolled = Math.round((winScroll / height) * 100);

      setScrollProgress(scrolled);
    }
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    // Call handler right away so state gets updated with initial window size
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures that effect is only run on mount
  return scrollProgress;
};

//TODO: Indicator appears twice on main route, on the top behinde the header and under the header, needs to be solved more beatiful
export const Indicator = () => {
  const matchPath = useMatches()[1].pathname === '/';
  const scrollProgress = useScrollProgress();
  const width = {
    width: `${scrollProgress}%`,
    transition: 'all 100ms',
  };
  return (
    <div
      className={`h-[2.5px] ${
        matchPath ? 'fixed' : ''
      } bg-primary transition-width ease-in-out duration-200`}
      style={width}
    />
  );
};

// gradient heaqder color bg-gradient-to-r from-black from-0% via-transparent via-50% to-primary to-100%
const Header = ({ bPos = 0 }: HeaderInterface) => {
  const [clicked, setClicked] = useState(false);
  const matchRoot = useMatches()[1].pathname === '/';
  const pos = useScrollPosition();
  return (
    <>
      <div
        className={`w-full bg-richBlack ${
          !matchRoot ? 'sticky' : 'fixed'
        } top-0 transition-header duration-250 ease-in-out z-10
      }  shadow-xl ${
        clicked || !matchRoot ? 'opacity-100 h-[64px]' : 'opacity-0 h-0'
      }`}
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
          <div className="flex gap-20">
            <HeaderMenuItems />
          </div>
        </div>
        <Indicator matchRoot={matchRoot} />
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
