import type { V2_MetaFunction } from '@remix-run/node';
import Intro from '~/components/Intro';
import Banner from '~/components/Banner';
import Projects from '~/components/ProjectStories';
import About from '~/components/About';
import { useEffect, useRef, useState } from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Tech from '~/components/Tech';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Home | webpaw solutions e.U.' }];
};
export const handle = {
  breadcrumb: () => 'parent',
};

export default function Index() {
  const [bannerPosition, setBannerPosition] = useState(350);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = ref.current.offsetTop;
    setBannerPosition(scroll);
  }, [bannerPosition]);
  return (
    <>
      <Header bPos={bannerPosition} />
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
