import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioLogo from '../images/ecosioLogo.jpg';
import xrplAgencyLogo from '../images/xrplAgencyLogo.png';
import PSBox from './ProjectStoryBox';
import Container from './Container';

const strShortener = (str: string) => {
  return str.substring(0, str.lastIndexOf(' ', 400)) + '...';
};

const Projects = () => {
  return (
    <Container>
      <div className="px-2 py-24">
        <h1 className="text-5xl font-bold py-4">Project Stories</h1>
        <div className="" id="1">
          <PSBox
            company="XRPL.Agency LLC"
            year="2022"
            logo={xrplAgencyLogo}
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
    </Container>
  );
};

export default Projects;
