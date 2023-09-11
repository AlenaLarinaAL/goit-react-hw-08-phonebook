import { Home, Section } from 'components';
import { Helmet } from 'react-helmet';
// import { Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section>
        <Home />
      </Section>
    </>
  );
};

export default HomePage;
