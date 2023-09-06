import { Button, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label name="email" value="email" type="email">
          Email
          <Input />
        </Label>

        <Label name="password" value="password" type="password">
          Password
          <Input />
        </Label>

        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};
