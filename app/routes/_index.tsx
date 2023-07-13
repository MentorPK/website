import type { V2_MetaFunction } from '@remix-run/node';
import About from '~/components/About';
import Container from '~/components/Container';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import Team from '~/components/Team';
import { Outlet } from '@remix-run/react';
import { useRef } from 'react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'webpaw solutions e.U.' }];
};

export default function Index() {
  const ref = useRef(null);
  return (
    <div className="bg-secondary text-slate-300">
      <div ref={ref}>
        <Banner />
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
