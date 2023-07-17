import Container from './Container';
import background from '../images/bgSide.svg';

const introStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
};
const Intro = () => {
  return (
    <div style={introStyles}>
      <Container>
        <div className="text-2xl p-4 my-24 italic text-center">
          Greetings traveler! Welcome to "webpaw solutions". We are all about
          creating web applications and websites for your personal needs.
          Doens't matter if you are are a commpany, startup or an individual
          that is looking for help, optimization or you want to start a project
          completely from scratch. We step in to save your time and stress and
          deliver a state of the art worthy product.
        </div>
      </Container>
    </div>
  );
};

export default Intro;
