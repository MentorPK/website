import pawelImg from '../images/pawel.jpeg';

const Team = () => {
  return (
    <div className="px-2 flex justify-center flex-col items-center">
      <h1 className="text-5xl font-bold py-4">Team</h1>
      <img
        className="border-4 rounded-full h-60 w-60"
        src={pawelImg}
        alt="Pawel Kowalski"
      />
      <p className="text-xl py-4">
        Hi, I'm Pawel Kowalski founder of "webpaw solutions". Currently a one
        man army at webpaw solution. I started my developer journey during my
        first year of college on "FH Technikum Vienna" where i also graduated in
        "Information and Communication Systems". After one year in college I had
        the opportunity to work at ecosio. This was my first IT job ever. In
        2017 for the first 6 months I started as a website admin and switched
        after to the frontend department until 2022.
      </p>
    </div>
  );
};

export default Team;
