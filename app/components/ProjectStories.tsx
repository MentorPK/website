import ecosioLogo from '../images/ecosioLogo.jpg';
import PSBox from './ProjectStoryBox';

const Projects = () => {
  return (
    <div className="px-2">
      <h1 className="text-5xl font-bold py-4">Project Stories</h1>
      <div className="">
        <PSBox
          company="XRPL.Agency LLC"
          year="2022"
          logo={''}
          text="Cryptocurrencies and blockchain piqued my interest, leading me to
              join XRPL.Agency and work on https://xrplcoins.com/. It was my
              first project and job outside of Austria. The 9 hours time
              difference were sometimes tough but managable. XRPL Coins is a
              community-driven marketplace with the main goal of making the XRPL
              Ledger more accessible to everyone. They offer all-in-one
              solutions for projects and participants who interact with XRPL. My
              tasks at XRPL Coins involved refactoring the project, such as
              restructuring directories, simplifying components, removing
              duplicate code, and creating more reusable components for a
              smoother workflow. Additionally, I implemented a new design and
              created new features. One of the exciting features was adding a
              social platform to their existing marketplace. It was an
              interesting and unique idea to differentiate from their
              competitors, and I had a lot of fun implementing it. This included
              creating user profiles, customizable settings, a social page where
              users could interact with each other, and a live chat reminiscent
              of Twitch streaming chat. It was definitely a cool addition to a
              crypto trading platform."
        />
        <PSBox
          company="ecosio GmbH"
          year="2017-2022"
          logo={ecosioLogo}
          text="     I had the privilege of working at ecosio GmbH, where we offered
              exceptional EDI and e-invoicing software solutions as a service.
              My journey with ecosio began in 2017, initially with simple tasks
              like adding content and enhancing the visual appeal of their
              website. It was an enjoyable experience as I had the freedom to
              express my creativity since no designer was involved at the time.
              Infusing the website with my personal touch was always fun. As
              time went on, I became a valuable member of the frontend team,
              contributing to the development of their first supplier
              relationship management tool. However, the most exciting project I
              worked on was the creation of the EDI monitor tool, which boasted
              captivating animated graphs. I take great pride in having
              developed this tool, as it effectively visualizes all EDI traffic
              for their customers. As my responsibilities grew, I found myself
              involved in additional tasks such as maintaining internal React
              component libraries, building a theme switch tool for our
              customers, and implementing a localization tool. ecosio not only
              provided me with my first job as a developer, but also offered me
              a platform to learn and grow. I am immensely grateful for the
              years I spent at ecosio, as they have played a pivotal role in
              shaping my career as a developer."
        />
      </div>
    </div>
  );
};

export default Projects;
