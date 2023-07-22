import { useEffect, useState } from 'react';

const useWindowWidth = (size: boolean) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const MOBILE_WIDTH = 768;
  useEffect(() => {
    const windowSize = window.innerWidth;
    setWindowWidth(windowSize);
  }, []);
  const isMobile = windowWidth < MOBILE_WIDTH;

  return size ? isMobile : windowWidth;
};

export default useWindowWidth;
