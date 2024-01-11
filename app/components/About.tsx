import { Link } from '@remix-run/react';
import pawelImg from '../images/pawel.jpeg';
import Container from './Container';
import Animate from './Animate';

const Team = () => {
  return (
    <div className="bg-secondary h-auto">
      <Container>
        <div className="flex flex-col justify-center items-center my-20">
          <div className="text-5xl font-bold mb-16">About</div>
          <div className="shadow-box flex justify-center flex-col items-center rounded-xl min-h-[700px] max-w-[500px] bg-secondary95 gap-4 px-4 py-8 xs:px-8">
            <Animate animation="zoomIn" style={{ animationDuration: '1250ms' }}>
              <Link to="/about">
                <img
                  className="border-4 border-primary rounded-full max-h-60 max-w-60 transition duration-200 ease-in-out hover:scale-[110%]"
                  src={pawelImg}
                  alt="Pawel Kowalski"
                />
              </Link>
            </Animate>
            <Animate animation="fadeIn" style={{ animationDuration: '2500ms' }}>
              <div className="text-xl py-4">
                Hi, I'm Pawel, a passionate Web Application Developer with
                Polish roots based in Vienna, Austria. Through the foundation of
                "webpaw solutions e.U." I set out to fulfill myself
                professionally and creatively.
                <br />
                My path as a developer began with my studies of Information and
                Telecommunication Systems at the University of Applied Sciences
                Vienna. During my second semester, I started as a frontend
                developer at "ecosio" where I honed my skills and acquired
                valuable experiences. After 3 years, I graduated in 2019 with a
                BSc degree.
                <br />
                <Link to="/about" className="link text-primary text-center">
                  ... read full article
                </Link>
              </div>
            </Animate>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
