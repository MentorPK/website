import { useEffect, useState } from 'react';

// Get Scrollposition!!!
const useScrollPosition = () => {
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setPos(scrollPosition);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pos;
};

export default useScrollPosition;
