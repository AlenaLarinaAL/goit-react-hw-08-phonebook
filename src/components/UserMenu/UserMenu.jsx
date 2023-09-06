import { Button, Wrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <>
      <Wrapper>
        <UserName>Welcome, </UserName>
        <Button type="button">Log out</Button>
      </Wrapper>
    </>
  );
};
