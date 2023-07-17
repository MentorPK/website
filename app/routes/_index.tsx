import type { V2_MetaFunction } from '@remix-run/node';
import Intro from '~/components/Intro';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import Team from '~/components/Team';
import { useRef } from 'react';
import Footer from '~/components/Footer';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'webpaw solutions e.U.' }];
};

export default function Index() {
  const ref = useRef(null);
  return (
    <div>
      <div ref={ref}>
        <Banner />
      </div>
      <Intro />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}
