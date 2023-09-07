import { useDispatch } from 'react-redux';
import { Button, Form, Input, Label } from './LoginForm.styled';
import { logIn } from 'store/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input name="email" type="email" />
        </Label>

        <Label>
          Password
          <Input name="password" type="password" />
        </Label>

        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};
