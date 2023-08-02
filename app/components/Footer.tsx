import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGitlabSquare,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import footer from '../images/footer300.svg';
import { Link } from '@remix-run/react';

const footerStyle = {
  backgroundImage: `url(${footer})`,
  width: '100%',
  minHeight: '240px',
  backgroundSize: '100% 100%',
};

interface Footer {
  addStyles?: string;
}

const Footer = ({ addStyles }: Footer) => {
  const copyDiscord = () => {
    navigator.clipboard.writeText('MentorPK#8447');
  };
  return (
    <div
      style={footerStyle}
      className={`text-white grid grid-flow-row grid-row-3 md:grid-flow-col md:grid-cols-3 justify-center h-[200px] gap-8 py-6 px-4`}
    >
      <div className="align-start justify-self-center order-last md:order-first">
        © 2023 webpaw solutions e.U.
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 text-lg text-center">
          Want to get in touch?{' '}
          <a href="/contact" className="link text-primary">
            Message me here!
          </a>
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
      <div className="align-end justify-self-center flex flex-col gap-2 order-first md:order-last text-lg">
        <div>
          <Link className="link" to="/legal-notice">
            Legal Notice
          </Link>
        </div>
        <div>
          <Link className="link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        {/*         <div>
          <Link className="link" to="/terms-and-conditions">
            Terms and conditions{' '}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
