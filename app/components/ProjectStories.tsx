import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioLogo from '../images/ecosioLogo.png';
import xrplAgencyLogo from '../images/xrplAgencyLogo.png';
import Container from './Container';
import { Link } from '@remix-run/react';
import Divider from './Divider';
import Animate from './Animate';

//Images should be 640:360

interface PSBox {
  company: string;
  year: string;
  logo: string;
  text: string[];
  id: string;
}
const PSBox = ({ company, year, logo, text, id }: PSBox) => {
  return (
    <div className="shadow-box flex flex-col xs:py-8 py-4 xs:px-8 px-4 overflow-hidden text-ellipsis bg-secondary rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <Animate animation="fadeInDown">
          <h2 className="text-4xl break-all">{company}</h2>
        </Animate>
        <Animate animation="fadeInRight">
          <div className="text-xl">{year}</div>
        </Animate>
      </div>
      <Animate animation="fadeInLeft" delay={100}>
        <div>
          <Divider />
        </div>
      </Animate>
      <div className="grid flex-row gap-8 pt-4 2xl:grid-cols-2">
        <Animate animation="fadeInUp" delay={200}>
          <Link to={`/projects#${id}`}>
            <img
              src={logo}
              className="rounded-xl border-primary border-1"
              alt={`${company}-img`}
            />
          </Link>
        </Animate>
        <Animate
          animation="fadeIn"
          delay={200}
          style={{ animationDuration: '2000ms' }}
        >
          <div className="text-xl">
            <div dangerouslySetInnerHTML={{ __html: text }} />
            <Link
              to={`/projects#${id}`}
              className="link text-primary text-center"
            >
              ... read full story
            </Link>
          </div>
        </Animate>
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

export const setFragmentsAsLinks = (
  text: string,
  anchorContent: Array<string>,
  href: Array<string>
) => {
  return anchorContent.map((el) => {
    return text.replace(
      el,
      `<a href="${href}" class="link primary" target="_blank" rel="noreferrer"
    >${el}</a>`
    );
  });
};

const Projects = () => {
  return (
    <Container addStyles="bg-secondary95">
      <div className="mx-0 xs:mx-2 my-20 ">
        <h1 className="text-5xl font-bold pb-16 text-center">
          Project Stories
        </h1>
        <div className="flex flex-col gap-8">
          <PSBox
            company="XRPL.Agency LLC"
            year="2022"
            logo={xrplAgencyLogo}
            text={setFragmentsAsLinks(
              strShortener(xrplAgencyText),
              ['https://xrplcoins.com/'],
              ['https://xrplcoins.com/']
            )}
            id="xrpl"
          />
          <PSBox
            company="ecosio GmbH"
            year="2017-2022"
            logo={ecosioLogo}
            text={setFragmentsAsLinks(
              strShortener(ecosioText),
              ['ecosio GmbH'],
              ['https://ecosio.com/en/']
            )}
            id="ecosio"
          />
        </div>
      </div>
    </Container>
  );
};

export default Projects;
