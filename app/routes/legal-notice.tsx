import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Contact | webpaw solutions e.U.', description: '' }];
};

const LegalNotice = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="my-12 mx-2">
          <div className="text-4xl text-primary font-bold my-4">
            Legal Notice
          </div>
          <ul className="my-4">
            <li className="font-semibold">webpaw solutions e.U.</li>
            <li>Pawel Kowalski</li>
            <li>Seyringer Straße 1/2/131</li>
            <li>1210 Vienna</li>
            <li>Austria</li>
          </ul>
          <ul>
            <li>
              <span className="font-semibold">Email: </span>
              <a className="link text-primary" href="pawel@web-paw.com">
                pawel@web-paw.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Website: </span>
              <a className="link text-primary" href="https://web-paw.com">
                web-paw.com
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <span className="font-semibold">
                Commercial register number:{' '}
              </span>
              FN 604297y
            </li>
            <li>
              <span className="font-semibold">Vat number: </span>
              ATU79643423
            </li>
            <li>
              <span className="font-semibold">Jurisdiction: </span>
              Handelsgericht Wien
            </li>
            <li>
              <span className="font-semibold">
                Chamber of commerce affiliation:{' '}
              </span>
              Wirtschaftskammer Wien
            </li>
            <li>
              <span className="font-semibold">Business puprose: </span>
              IT services, software development
            </li>
          </ul>

          <div className="my-6 text-2xl">Liability Disclaimer</div>
          <div className="my-2">
            Consumers have the option to submit complaints to the European
            Union's online dispute resolution platform:{' '}
            <a className="link text-primary" href="http://ec.europa.eu/odr">
              http://ec.europa.eu/odr{' '}
            </a>
            . You can also address any possible complaints to the email address
            provided above.
          </div>
          <div className="my-2">
            The content and materials on this website, including but not limited
            to text, images, graphics, logos, and audio-visual elements, are
            protected by copyright laws and other intellectual property laws.
            Any unauthorized reproduction, distribution, or modification of any
            part of this website may lead to significant civil and criminal
            consequences.
          </div>
          <div className="my-2">
            Although we conduct a thorough review, we cannot be held responsible
            for the content of external links. The operators of the linked sites
            are solely responsible for the content on their websites.
          </div>
          <div className="my-2">
            All brands and logos mentioned or displayed on this website belong
            to their respective owners.
          </div>
          <ul>
            <div className="text-2xl my-6">
              Photography / Designs / Graphics:
            </div>
            <li>Pawel Kowalski</li>
            <li>
              <a
                className="link text-primary"
                href="https://www.thomas-peintinger.at/"
                target="_blank"
                rel="noreferrer"
              >
                Thomas Peintinger
              </a>
            </li>
            <li>
              <a
                className="link text-primary"
                href="https://ecosio.com "
                target="_blank"
                rel="noreferrer"
              >
                ecosio GmbH
              </a>
            </li>
            <li>
              <a
                className="link text-primary"
                href="https://www.fontspace.com/do-diseno-grafico"
                target="_blank"
                rel="noreferrer"
              >
                David Ordóñez
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LegalNotice;
