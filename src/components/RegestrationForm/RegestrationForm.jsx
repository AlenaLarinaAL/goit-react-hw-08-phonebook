import { useDispatch } from 'react-redux';
import { Button, Form, Input, Label } from './RegestrationForm.styled';
import { register } from 'store/auth/authOperations';

export const RegestrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(form.elements.name.value);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input name="name" type="text" />
      </Label>

      <Label>
        Email
        <Input name="email" type="email" />
      </Label>

      <Label>
        Password
        <Input name="password" type="password" minlength="7" />
      </Label>

      <Button type="submit">Registrate</Button>
    </Form>
  );
};
