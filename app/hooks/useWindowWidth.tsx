import { useEffect, useState } from 'react';
const MOBILE_WIDTH = 768;

//TODO: useState is ofc triggered before rendering so it flickers regarding on screensizie, need better solution
const useWindowWidth = (size: boolean) => {
  const [windowWidth, setWindowWidth] = useState(768);
  useEffect(() => {
    const windowSize = window.innerWidth;
    setWindowWidth(windowSize);
  }, []);
  const isMobile = windowWidth < MOBILE_WIDTH;

  return size ? isMobile : windowWidth;
};

export default useWindowWidth;
