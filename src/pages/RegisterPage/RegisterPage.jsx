import { RegestrationForm, Section } from 'components';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Section>
        <RegestrationForm />
      </Section>
    </>
  );
};

export default RegisterPage;
