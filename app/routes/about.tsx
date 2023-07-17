import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const About = ({}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header clicked sticky={false} />
      <Container>
        <div className="text-xl self-start my-4">About Me</div>
        <div>
          Hi, I'm Pawel, a passionate Frontend Developer based in Vienna,
          Austria. Through the foundation of "webpaw solutions" I set out to
          fulfill myself professionally and creatively. <br />
          <br />
          My path as a developer began with my studies of Information and
          Telecommunication Systems at FH Technikum Vienna. During my second
          semester, I started as a frontend developer at "ecosio" where I honed
          my skills and acquired valuable experiences. After 3 years, I
          graduated in 2019 with a BSc degree.
          <br />
          <br />
          One of the aspects I enjoy most about being a frontend developer is
          the opportunity to bring creative projects to life. It's immensely
          satisfying to see ideas transformed into functional and visually
          appealing apps and websites. Every project I work on is a chance to
          challenge myself and have fun during the development process. <br />
          <br />
          Beyond coding, I have a variety of hobbies that keep me engaged and
          balanced. In my free time, you can find me immersing myself in various
          PC and board games, enjoying lively gaming sessions with my friends. I
          also have a passion for building and creating with Lego, using it as a
          way to express my creativity and bring my imagination to life.
          Additionally, I find great enjoyment in assembling and working on
          custom PC builds, exploring the latest technology and optimizing
          performance. On the other side, spending quality time with my family
          is of utmost importance to me. They are a source of joy and help me to
          recharge and appreciate the things that matter most.
          <br />
          <br />
          Thank you for visiting my website. I am excited to collaborate and
          bring your web development ideas to life!
          <br />
          <br />
        </div>
      </Container>
      <Footer addStyles="mt-[calc(100vh-768px)]" />
    </div>
  );
};
export default About;
