import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGitlabSquare,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import footer from '../images/footer300.svg';
//import { Link } from '@remix-run/react';

const footerStyle = {
  backgroundImage: `url(${footer})`,
  width: '100%',
  height: '240px',
};

interface Footer {
  addStyles?: string;
}

const Footer = ({ addStyles }: Footer) => {
  const copyDiscord = () => {
    navigator.clipboard.writeText('MentorPK#8447');
  };
  return (
    <div className={`text-white ${addStyles}`} style={footerStyle}>
      <div className="flex flex-col justify-center items-center py-10">
        <div className="col-span-2 py-2 text-lg">
          If you want to contact me? <a href="/contact">Just mail me!</a>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/pawel-kowalski-1414901a0/"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12" />
          </a>
          <a
            href="https://gitlab.com/m3nt0rpk"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faGitlabSquare} className="w-12 h-12" />
          </a>
          <a
            href="https://github.com/MentorPK"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
          </a>
          <FontAwesomeIcon
            icon={faDiscord}
            className="w-12 h-12 transition ease-in-out duration-200 hover:scale-125 cursor-pointer"
            onClick={copyDiscord}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
