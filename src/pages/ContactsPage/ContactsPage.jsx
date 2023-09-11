import { ContactsList, ContactsEditor, Filter, Spinner } from 'components';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/contactsOperations';
import { selectLoading } from 'store/contacts/contactsSelector';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts(), [dispatch]);
  });

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Section>
        {isLoading && <Spinner />}
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
