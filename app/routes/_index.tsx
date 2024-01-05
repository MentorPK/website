import type { V2_MetaFunction } from '@remix-run/node';
import Intro from '~/components/Intro';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import About from '~/components/About';
import { useEffect, useRef, useState } from 'react';
import Footer from '~/components/Footer';
import Header, { Indicator } from '~/components/Header';
import Tech from '~/components/Tech';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'webpaw solutions - pawsome apps for your success',
    },
    {
      name: 'description',
      content:
        'We create web applications and websites for your personal needs. We step in to save your time, reduce stress while delivering a state of the art worthy product.',
    },
  ];
};

export default function Index() {
  const [bannerPosition, setBannerPosition] = useState(350);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = ref?.current?.offsetTop;
    setBannerPosition(scroll);
  }, [bannerPosition]);
  return (
    <>
      <Header bPos={bannerPosition} />
      <Indicator />
      <Banner />
      <div ref={ref}>
        <Intro />
      </div>
      <Projects />
      <About />
      <Tech />
      <Footer />
    </>
  );
}
