import { Button, Form, Input, Label } from './RegestrationForm.styled';

export const RegestrationForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label name="name" value="name" type="name">
          Name
          <Input />
        </Label>

        <Label name="email" value="email" type="email">
          Email
          <Input />
        </Label>

        <Label name="password" value="password" type="password">
          Password
          <Input />
        </Label>

        <Button type="submit">Registrate</Button>
      </Form>
    </>
  );
};
