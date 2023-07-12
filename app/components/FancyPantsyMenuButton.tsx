interface FancyPantsyMenuButton {
  active: boolean;
  addStyle?: string;
  clicked: boolean;
  setClicked: (arg0: boolean) => void;
}

const FancyPantsyMenuButton = ({
  active,
  addStyle,
  clicked,
  setClicked,
}: FancyPantsyMenuButton) => {
  return (
    <div
      className={`circle border-4 h-14 w-14 border-white rounded-full flex m-2 items-center circle ${addStyle}`}
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
