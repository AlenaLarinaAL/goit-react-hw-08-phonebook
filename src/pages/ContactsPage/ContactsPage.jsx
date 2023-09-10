import { ContactsList, ContactsEditor, Filter } from 'components';
import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Section>
        <ContactsEditor />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default ContactsPage;
