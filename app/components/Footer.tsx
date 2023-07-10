import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGitlabSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import banner from '../images/banner.png';
//import { Link } from '@remix-run/react';

const bannerStyle = {
  background: `url(${banner})`,
};
const Footer = () => {
  return (
    <div style={bannerStyle} className="text-white">
      <div className="flex flex-col justify-center items-center py-8">
        <div className="col-span-2">
          If you want to contact me? <a href="/contact">Just mail me!</a>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/pawel-kowalski-1414901a0/"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="https://gitlab.com/m3nt0rpk"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faGitlabSquare} size="3x" />
          </a>
          <a
            href="https://github.com/MentorPK"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-200 hover:scale-125"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
