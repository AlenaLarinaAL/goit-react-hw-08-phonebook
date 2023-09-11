import { List, Item, Span, Button } from './ContactsList.styled';
import { MdDelete } from 'react-icons/md';
import { filterContacts } from 'store/filter/filterSelector';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Notification } from 'components';
import { selectAll, selectLoading } from 'store/contacts/contactsSelector';
import { deleteContact } from 'store/contacts/contactsOperations';

export const ContactsList = () => {
  const contacts = useSelector(selectAll);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const filter = useSelector(filterContacts);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <List>
        {isLoading && <Spinner />}

        {contacts?.length > 0 ? (
          <>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <Span>
                  {name}: {number}
                </Span>
                <Button onClick={() => dispatch(deleteContact(id))}>
                  <MdDelete size={15} />
                </Button>
              </Item>
            ))}
          </>
        ) : (
          <Notification message="No contacts" />
        )}
      </List>
    </>
  );
};
