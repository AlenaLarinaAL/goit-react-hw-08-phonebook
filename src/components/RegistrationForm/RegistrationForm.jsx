import { useDispatch } from 'react-redux';
import { Button, Form, Input, Label } from './RegistrationForm.styled';
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

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input name="name" type="text" required />
      </Label>

      <Label>
        Email
        <Input name="email" type="email" required />
      </Label>

      <Label>
        Password
        <Input name="password" type="password" minlength="7" />
      </Label>

      <Button type="submit">Sign up</Button>
    </Form>
  );
};
