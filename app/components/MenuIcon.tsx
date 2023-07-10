import { useState } from 'react';
const MenuIcon = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-5 w-5">
      <button
        className={`tcon-menu ${clicked ? 'active' : ''}`}
        onClick={() => setClicked(!clicked)}
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
export default MenuIcon;
