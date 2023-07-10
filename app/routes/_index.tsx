import type { V2_MetaFunction } from '@remix-run/node';
import About from '~/components/About';
import Container from '~/components/Container';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import Team from '~/components/Team';
import { Outlet } from '@remix-run/react';
import { useState, useRef, useEffect } from 'react';
import Header from '~/components/Header';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'webpaw solutions e.U.' }];
};

export default function Index() {
  const ref = useRef(null);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setPos(scrollPosition);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-secondary text-slate-300">
      <div ref={ref}>
        <Banner />
      </div>

      <div
        className={`h-20 w-full bg-red-500 sticky top-0 mb-1 transition duration-500 ease-in-out ${
          pos > 300 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
      </div>
      <Container>
        <About />
        <Team />
        <Projects />
        <Outlet />
      </Container>
    </div>
  );
}
