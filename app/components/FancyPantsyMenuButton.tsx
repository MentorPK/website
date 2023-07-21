import { useEffect } from 'react';

interface FancyPantsyMenuButton {
  pos: number;
  addStyle?: string;
  clicked: boolean;
  setClicked: (arg0: boolean) => void;
  bPos?: number;
}

const FancyPantsyMenuButton = ({
  pos,
  clicked,
  addStyle,
  setClicked,
  bPos = 0,
}: FancyPantsyMenuButton) => {
  const active = pos > bPos ? true : false;
  const inactive = pos < bPos ? true : false;
  useEffect(() => {
    inactive && setClicked(false);
  });
  return (
    <div
      className={`circle border-4 h-14 w-14 border-white rounded-full flex m-2 items-center circle fixed z-10 transition duration-200 ${addStyle} ${
        active ? 'opacity-100' : inactive ? 'opacity-0' : ''
      }`}
    >
      <button
        className={`tcon-menu ${clicked ? 'active' : ''}`}
        onClick={() => setClicked(!clicked)}
        disabled={!active}
      >
        <span className={`bars ${clicked ? 'active' : ''}`}>
          <i className={`bar ${clicked ? 'active' : ''}`} />
          <i className={`bar ${clicked ? 'active' : ''}`} />
          <i className={`bar ${clicked ? 'active' : ''}`} />
        </span>
        <span className={`cross ${clicked ? 'active' : ''}`} />
      </button>
    </div>
  );
};
export default FancyPantsyMenuButton;
