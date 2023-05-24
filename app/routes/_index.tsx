import type { V2_MetaFunction } from '@remix-run/node';
import About from '~/components/About';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Projects from '~/components/Projects';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'webpaw solutions e.U.' }];
};

export default function Index() {
  return (
    <div>
      <Header />
      <div className="flex flex-col container md:mx-auto">
        <div>
          <About />
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
}
