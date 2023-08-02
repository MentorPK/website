import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import pawelImg from '../images/pawel.jpeg';
import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'About | webpaw solutions e.U.',
      description: '',
    },
  ];
};

const About = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-secondary">
      <Header />
      <Container>
        <div className="flex xl:flex-row flex-col gap-4 my-12 mx-2">
          <img
            className="rounded-2xl max-h-[400px] self-center"
            src={pawelImg}
            alt="Pawel Kowalski"
          />
          <div className="inline-block xl:min-h-[16px] xl:min-w-[2px] min-w-[16px] min-h-[2px] bg-primary my-4 rounded-full" />
          <div>
            <div className="text-xl self-start my-4">About Me</div>
            Hi, I'm Pawel, a passionate Web Application Developer 💻 with Polish
            roots based in Vienna, Austria. Through the foundation of "webpaw
            solutions e.U." I set out to fulfill myself professionally and
            creatively.
            <br />
            <br />
            My path as a developer began with my studies of Information and
            Telecommunication Systems at University of Applied Sciences Vienna.
            During my second semester, I started as a frontend developer at
            "ecosio" 🧑‍💻 where I honed my skills and acquired valuable
            experiences. After 3 years, I graduated in 2019 with a BSc degree 🎓
            .
            <br />
            <br />
            One of the aspects I enjoy most about being a frontend developer is
            the opportunity to bring creative projects to life. It's immensely
            satisfying to see ideas 💡 transformed into functional 🧩 and
            visually 💫 appealing apps and websites. Every project I work on is
            a chance to challenge myself and have fun during the development
            process. <br />
            <br />
            Beyond coding, I have a variety of hobbies that keep me engaged and
            balanced. In my free time, you can find me immersing myself in
            various PC 💻 and board games 🎲, enjoying lively gaming sessions
            with my friends. I also have a passion for building and creating
            with Lego, using it as a way to express my creativity and bring my
            imagination to life. Additionally, I find great enjoyment in
            assembling and working on custom PC builds, exploring the latest
            technology and optimizing performance. I also have a passion for
            cooking 🍲🍙🍔🍟🍕 and experimenting with creative cocktails 🍹. And
            of course, the best part is savoring every bite and sip as it finds
            its way into my eager stomach🫄. On the other hand, spending quality
            time with my family is of utmost importance to me. They are a source
            of joy and help me to recharge and appreciate the things that matter
            most.
            <br />
            <br />
            Thank you for visiting my website. I am excited to collaborate and
            bring your web development ideas to life!
            <br />
            <br />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default About;
