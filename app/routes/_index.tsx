import type { V2_MetaFunction } from '@remix-run/node';
import Intro from '~/components/Intro';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import About from '~/components/About';
import { useEffect, useRef, useState } from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Tech from '~/components/Tech';
import useScrollPosition from '~/hooks/useScrollPosition';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Home | webpaw solutions e.U.',
      description:
        'We create web applications and websites for your personal needs.',
    },
  ];
};
export const handle = {
  breadcrumb: () => 'parent',
};

export default function Index() {
  const position = useScrollPosition();
  const transform = position > 0;
  return (
    <div className="bg-richBlack">
      <Banner />
      <div className={`${transform ? 'mt-[64px]' : 'mt-[350px]'}`}>
        <Intro />
        <Projects />
        <About />
        <Tech />
      </div>
      <Footer />
    </div>
  );
}
