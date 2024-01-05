import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Highlighter from '~/components/learningByDoing/Highlighter';

const code = `const prices = (kwh) => {  
  return [{person: "Wat", price: Math.round((Math.random() + 0.1) * kwh) }, 
          {person: "Dat", price: Math.round((Math.random() + 0.1) * kwh) }, 
          {person: "Gat", price: Math.round((Math.random() + 0.1) * kwh) }]
}`;
const CodingInterview = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="flex 2xl:flex-row flex-col gap-4 my-12 mx-2">
          <Highlighter>{code}</Highlighter>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default CodingInterview;
