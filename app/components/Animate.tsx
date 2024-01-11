import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { useInView } from 'react-intersection-observer';

type Animate = {
  animation?: string;
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
};

const Animate = ({ children, animation, delay = 0, style }: Animate) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  if ((children as Array<any>)?.length > 1) {
    console.error('Only one child is allowed!!!');
    return null;
  }
  return Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        //@ts-ignore
        className: `${child.props.className || ''} ${
          inView && animation && `animated ${animation} animate-delay-${delay}`
        }`.trim(),
        style: { ...child.props.style, ...style },
        ref,
      });
    }
    return child;
  });
};

export default Animate;
