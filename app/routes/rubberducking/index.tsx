import { Outlet } from '@remix-run/react';
import Container from '~/components/Container';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const RubberDuck = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-secondary">
        <Header />
        <Container>
          <div>
            Hello and welcome to Rubber Duck "Learning," a portal where I will
            address problems to better understand them myself. Additionally, I
            hope that I can help others become better developers.
          </div>
        </Container>
        <Footer />
      </div>
      <Outlet />
    </>
  );
};

export default RubberDuck;
