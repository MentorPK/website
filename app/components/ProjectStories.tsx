import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioLogo from '../images/ecosioLogo.jpg';
import xrplAgencyLogo from '../images/xrplAgencyLogo.png';
import Container from './Container';

interface PSBox {
  company: string;
  year: string;
  logo: string;
  text: string;
}
const PSBox = ({ company, year, logo, text }: PSBox) => {
  return (
    <div className="my-4shadow-box flex flex-col xs:py-8 py-4 xs:px-8 px-4 my-8 overflow-hidden text-ellipsis bg-secondary rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-4xl break-all">{company}</h2>
        <div className="text-xl">{year}</div>
      </div>
      <div className="grid flex-row gap-8 py-4 2xl:grid-cols-2">
        <img src={logo} className="rounded-lg" alt={`${company}-img`} />
        <p className="text-xl ">{text}</p>
      </div>
    </div>
  );
};

const strShortener = (str: string) => {
  return str.substring(0, str.lastIndexOf(' ', 400)) + '...';
};

const Projects = () => {
  return (
    <Container addStyles="bg-opacity-95 bg-secondary">
      <div className="mx-0 xs:mx-2 my-20 ">
        <h1 className="text-5xl font-bold py-4 text-center">Project Stories</h1>
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
