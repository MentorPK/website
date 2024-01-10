import type { CSSProperties, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
type Animate = {
  animation: string;
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
};
const Animate = ({ children, animation, delay = 0, style }: Animate) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={`${inView && `animated ${animation} animate-delay-${delay}`}`}
      style={style}
    >
      {children}
    </div>
  );
};
export default Animate;
