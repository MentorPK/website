import Container from './Container';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faGears,
  faCubes,
  faCalendar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TechBox {
  title: string;
  icon: IconDefinition;
  list: string[];
}

const TechBox = ({ title, icon, list }: TechBox) => {
  return (
    <div className="bg-secondary shadow-box h-[370px] lg:w-[300px] md:w-[250px] w-full md:px-8 px-4 py-4 rounded-lg">
      <div className="flex flex-row items-center gap-4 py-2">
        <FontAwesomeIcon icon={icon} className="w-8 h-8" />
        <div className="text-2xl font-bold">{title}</div>
      </div>
      <div className="inline-block min-h-[2px] min-w-full bg-primary my-2 rounded-full" />
      <ul>
        {list.map((i, idx) => (
          <li key={idx} className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-primary" />
            <div>{i}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tech = () => {
  const langList = [
    'Javascript/ES6',
    'HTML5/CSS3',
    'LESS/SASS',
    'Webpack',
    'Vite',
    'SQLite',
    'Firebase',
    'Java (Basics)',
  ];
  const libList = [
    'React/Redux/Router',
    'NextJS',
    'Remix',
    'Typescript',
    'React Hook Form',
    'React Framer Motion',
    'Tailwind',
    'Bootstrap',
    'Material UI',
    'Semantic/Fomantic UI',
    'Nivo',
  ];
  const dailyList = ['Windows', 'Git/GitHub/GitLab', 'VS Code', 'Clockify'];

  return (
    <div className="bg-secondary95 text-base">
      <Container>
        <div className="my-20">
          <div className="text-5xl font-bold text-center mb-16">
            Skills & Tools
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center lg:gap-20 md:gap-8 gap-4">
            <TechBox title="Lang / Tech" icon={faGears} list={langList} />
            <TechBox title="FW & Libs" icon={faCubes} list={libList} />
            <TechBox title="Daily use" icon={faCalendar} list={dailyList} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tech;
