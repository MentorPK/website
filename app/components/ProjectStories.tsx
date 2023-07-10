import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioLogo from '../images/ecosioLogo.jpg';
import PSBox from './ProjectStoryBox';

const strShortener = (str: string) => {
  return str.substring(0, str.lastIndexOf(' ', 400)) + '...';
};

const Projects = () => {
  return (
    <div className="px-2">
      <h1 className="text-5xl font-bold py-4">Project Stories</h1>
      <div className="" id="1">
        <PSBox
          company="XRPL.Agency LLC"
          year="2022"
          logo={''}
          text={strShortener(xrplAgencyText)}
        />
        <PSBox
          company="ecosio GmbH"
          year="2017-2022"
          logo={ecosioLogo}
          text={strShortener(ecosioText)}
        />
      </div>
    </div>
  );
};

export default Projects;
