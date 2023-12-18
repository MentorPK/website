import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Highlighter from '~/components/learningByDoing/Highlighter';

const LearningByDoing = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="flex 2xl:flex-row flex-col gap-4 my-12 mx-2">
          <Highlighter language="ts">const mat = dat</Highlighter>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LearningByDoing;
