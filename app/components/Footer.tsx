import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGitlabSquare,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import footer from '../images/footer200.svg';
import { Link } from '@remix-run/react';
import { useState } from 'react';

const footerStyle = {
  backgroundImage: `url(${footer})`,
  width: '100%',
  backgroundSize: '100% 100%',
};

interface Footer {
  addStyles?: string;
}

const Footer = ({ addStyles }: Footer) => {
  const [discord, setDiscord] = useState(false);

  const copyDiscord = () => {
    navigator.clipboard.writeText('MentorPK#8447');
    setDiscord(true);

    setTimeout(() => {
      setDiscord(false);
    }, 4000);
  };
  return (
    <div
      style={footerStyle}
      className={`text-white grid grid-flow-row grid-row-3 md:grid-flow-col md:grid-cols-3 justify-center md:gap-8 gap-4 py-6 px-4 md:h-[200px] h-[280px]`}
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
          <div className="relative">
            {discord && (
              <div className="w-[200px] h-max border-2 p-4 rounded bg-richBlack bg-opacity-90 bottom-[60px] xs:left-[-80px] left-[-130px] border-primary absolute text-slate-300 z-50 animate-[pop_0.5s_ease-in-out]">
                Hey, my Discord ID was copied to your clipboard!
              </div>
            )}
            <FontAwesomeIcon
              icon={faDiscord}
              className="w-12 h-12 transition ease-in-out duration-200 hover:scale-125 cursor-pointer"
              onClick={copyDiscord}
            />
          </div>
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
