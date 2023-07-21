import pawelImg from '../images/pawel.jpeg';
import Container from './Container';

const Team = () => {
  return (
    <Container addStyles="bg-secondary">
      <div className="p-4 pb-24 flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold py-4">About</h1>
        <img
          className="border-4 border-primary rounded-full h-60 w-60"
          src={pawelImg}
          alt="Pawel Kowalski"
        />
        <p className="text-xl py-4">
          Hi, I'm Pawel Kowalski founder of "webpaw solutions e.U.". Currently a
          one man army at webpaw solution. I started my developer journey during
          my first year of college on "FH Technikum Vienna" where i also
          graduated in "Information and Communication Systems". After one year
          in college I had the opportunity to work at ecosio. This was my first
          IT job ever. In 2017 for the first 6 months I started as a website
          admin and switched after to the frontend department until 2022.
        </p>
      </div>
    </Container>
  );
};

export default Team;
