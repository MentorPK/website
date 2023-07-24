import { ecosioText, xrplAgencyText } from '~/texts/projectTexts';
import ecosioBanner from '../images/ecosioBanner.jpg';
import Container from '~/components/Container';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Divider from '~/components/Divider';

interface ProjectStory {
  banner: string;
  company: string;
  text: string;
}
const ProjectStory = ({ banner, company, text }: ProjectStory) => {
  return (
    <div>
      <h2 className="text-4xl break-all py-4">{company}</h2>
      <img
        src={banner}
        className="rounded-lg max-w-full py-4"
        alt={`${company}-img`}
      />
      <p className="text-xl py-4">{text}</p>
    </div>
  );
};

const ProjectStories = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="mb-20">
          <div className="text-5xl font-bold my-8">Project Stories</div>
          <Divider />
          <ProjectStory
            banner={ecosioBanner}
            company={'ecosio GmbH'}
            text={ecosioText}
          />
          <Divider />
          <ProjectStory
            banner={ecosioBanner}
            company={'XRPL.Agency LLC'}
            text={xrplAgencyText}
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default ProjectStories;
