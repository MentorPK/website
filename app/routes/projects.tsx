import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioBanner from '../images/ecosioBanner.png';
import xrplBanner from '../images/xrplBanner.png';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Divider from '~/components/Divider';
import type { V2_MetaFunction } from '@remix-run/node';
import { setFragmentsAsLinks } from '~/components/ProjectStories';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Project Stories | webpaw solutions',
    },
    {
      name: 'description',
      content:
        'Welcome to Project Stories! Here, I share my exciting journey through various projects and experiences.',
    },
  ];
};

//Banner are fine with 1300:320

interface ProjectStory {
  banner: string;
  company: string;
  text: string[];
  id: string;
}
const ProjectStory = ({ banner, company, text, id }: ProjectStory) => {
  return (
    <div id={id}>
      <h2 className="text-4xl break-all py-4 mx-2">{company}</h2>
      <img
        src={banner}
        className="rounded-lg max-w-full py-4"
        alt={`${company}-img`}
      />
      <div
        className="text-xl py-4 mx-2"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

const ProjectStories = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="mb-20">
          <div className="text-5xl font-bold my-8 mx-2">Project Stories</div>
          <Divider />
          <ProjectStory
            banner={xrplBanner}
            company={'XRPL.Agency LLC'}
            text={setFragmentsAsLinks(
              xrplAgencyText,
              ['https://xrplcoins.com/'],
              ['https://xrplcoins.com/']
            )}
            id="xrpl"
          />
          <Divider />
          <ProjectStory
            banner={ecosioBanner}
            company={'ecosio GmbH'}
            text={setFragmentsAsLinks(
              ecosioText,
              ['ecosio GmbH'],
              ['https://ecosio.com/en/']
            )}
            id="ecosio"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ProjectStories;
