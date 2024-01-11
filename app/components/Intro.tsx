import Container from './Container';
import background from '../images/bgSide.svg';
import Animate from './Animate';

const introStyles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
};
const Intro = () => {
  return (
    <div style={introStyles} className="bg-secondary">
      <Container>
        <Animate animation="fadeIn" style={{ animationDuration: '2500ms' }}>
          <div className="text-2xl p-4 my-24 mx-2 italic text-center">
            Greetings traveler! Welcome to "webpaw solutions". We are all about
            creating web applications and websites for your personal needs.
            Doesn't matter if you are a established company, startup or an
            individual that is looking for help, optimization or you want to
            start a project completely from scratch. We step in to save your
            time, reduce stress while delivering a state of the art worthy
            product.
          </div>
        </Animate>
      </Container>
    </div>
  );
};

export default Intro;
