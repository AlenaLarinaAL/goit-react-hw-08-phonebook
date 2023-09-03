import { Section, ContactsList, ContactsEditor, Filter } from 'components';

const ContactsPage = () => {
  return (
    <>
      <Section title="PhoneBook">
        <ContactsEditor />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default ContactsPage;
