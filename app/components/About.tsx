import { Link } from '@remix-run/react';
import pawelImg from '../images/pawel.jpeg';
import Container from './Container';

const Team = () => {
  return (
    <Container addStyles="bg-secondary">
      <div className="my-20 mx-2 flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold pb-8">About</h1>
        <Link to="/about" className="py-4">
          <img
            className="border-4 border-primary rounded-full max-h-60 max-w-60 transition duration-200 ease-in-out hover:scale-[110%]"
            src={pawelImg}
            alt="Pawel Kowalski"
          />
        </Link>
        <p className="text-xl py-4">
          Hi, I'm Pawel Kowalski founder of "webpaw solutions e.U.". Currently a
          one man army at webpaw solutions. I started my developer journey
          during my first year of college on University of Applied Sciences
          Vienna where i also graduated in "Information and Communication
          Systems". After one year in college I had the opportunity to work at
          ecosio and start my career in IT. In 2017 for the first 6 months I
          started as a website admin and switched after to the frontend
          department until 2022.
        </p>
      </div>
    </Container>
  );
};

export default Team;
