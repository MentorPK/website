import type { V2_MetaFunction } from '@remix-run/node';
import About from '~/components/About';
import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Projects from '~/components/ProjectStories';
import bg from '../images/bg.jpg';
import Team from '~/components/Team';
const background = {
  background: `url(${bg})`,
  backgroundSize: 'cover',
};

export const meta: V2_MetaFunction = () => {
  return [{ title: 'webpaw solutions e.U.' }];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Container>
        <About />
        <Team />
        <Projects />
      </Container>
      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
}
