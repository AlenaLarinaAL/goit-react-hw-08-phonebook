import { Section } from 'components';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section>
        <div>HomePage </div>
      </Section>
    </>
  );
};

export default HomePage;
