import Container from './Container';
import background from '../images/bgSide.svg';

const introStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
};
const Intro = () => {
  return (
    <div style={introStyles} className="bg-secondary">
      <Container>
        <div className="text-2xl p-4 my-24 mx-2 italic text-center">
          Greetings traveler! Welcome to "webpaw solutions". We are all about
          creating web applications and websites for your personal needs.
          Doens't matter if you are are a company, startup or an individual that
          is looking for help, optimization or you want to start a project
          completely from scratch. We step in to save your time, reduce stress
          while delivering a state of the art worthy product.
        </div>
      </Container>
    </div>
  );
};

export default Intro;
