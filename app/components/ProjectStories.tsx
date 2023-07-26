import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioLogo from '../images/ecosioLogo.png';
import xrplAgencyLogo from '../images/xrplAgencyLogo.png';
import Container from './Container';
import { Link } from '@remix-run/react';
import Divider from './Divider';

//Images should be 640:360

interface PSBox {
  company: string;
  year: string;
  logo: string;
  text: string[];
}
const PSBox = ({ company, year, logo, text }: PSBox) => {
  return (
    <div className="shadow-box flex flex-col xs:py-8 py-4 xs:px-8 px-4 my-8 overflow-hidden text-ellipsis bg-secondary rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-4xl break-all">{company}</h2>
        <div className="text-xl">{year}</div>
      </div>
      <Divider />
      <div className="grid flex-row gap-8 pt-4 2xl:grid-cols-2">
        <Link to="/projects">
          <img
            src={logo}
            className="rounded-xl border-primary border-1"
            alt={`${company}-img`}
          />
        </Link>
        <div className="text-xl">
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <Link to="/projects" className="link text-primary text-center">
            ... read full story
          </Link>
        </div>
      </div>
    </div>
  );
};

const strShortener = (str: string) => {
  return str.substring(0, str.lastIndexOf(' ', 400)) + ' ...';
};
/* 
const urlRegex =
  /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([\w!#$%&+,./:=?@|~-]*\)|[\w!#$%&+,./:=?@|~-])*(?:\([\w!#$%&+,./:=?@|~-]*\)|[\w#$%&+/=@|~])/gm;
  
const setUrlsAsLinks = (text: string) => {
  const newStr = strShortener(text);
  return newStr.replace(urlRegex, (match) => {
    return `<a href="${match}" class="link primary" target="_blank" rel="noreferrer"
    >${match}</a>`;
  });
}; */

const setFragmentsAsLinks = (
  text: string,
  anchorContent: Array<string>,
  href: Array<string>
) => {
  const shortStr = strShortener(text);
  return anchorContent.map((el) => {
    return shortStr.replace(
      el,
      `<a href="${href}" class="link primary" target="_blank" rel="noreferrer"
    >${el}</a>`
    );
  });
};

const Projects = () => {
  return (
    <Container addStyles="bg-opacity-95 bg-secondary">
      <div className="mx-0 xs:mx-2 my-20 ">
        <h1 className="text-5xl font-bold py-4 text-center">Project Stories</h1>
        <div className="">
          <PSBox
            company="XRPL.Agency LLC"
            year="2022"
            logo={xrplAgencyLogo}
            text={setFragmentsAsLinks(
              xrplAgencyText,
              ['https://xrplcoins.com/'],
              ['https://xrplcoins.com/']
            )}
          />
          <PSBox
            company="ecosio GmbH"
            year="2017-2022"
            logo={ecosioLogo}
            text={setFragmentsAsLinks(
              ecosioText,
              ['ecosio GmbH'],
              ['https://ecosio.com/en/']
            )}
          />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
