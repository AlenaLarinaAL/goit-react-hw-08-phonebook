import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input, Label } from './ContactsEditor.styled';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectAll } from 'store/contacts/contactsSelector';
import { addContact } from 'store/contacts/contactsOperations';
import { nanoid } from '@reduxjs/toolkit';

export const ContactsEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAll);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    const isDuplicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      Notify.warning(`${name} is already in contacts`);
      event.target.reset();
      return;
    }
    dispatch(addContact({ name, number, id: nanoid(5) }));

    Notify.success('Contact successfully added!');

    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
