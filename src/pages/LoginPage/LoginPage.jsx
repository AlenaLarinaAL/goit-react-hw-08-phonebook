import { LoginForm, Section } from 'components';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>log in</title>
      </Helmet>
      <Section>
        <LoginForm />
      </Section>
    </>
  );
};

export default LoginPage;
