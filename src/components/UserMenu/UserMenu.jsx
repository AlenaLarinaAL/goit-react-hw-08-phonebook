import { useDispatch } from 'react-redux';
import { Button, Wrapper, UserName } from './UserMenu.styled';
import { useAuth } from 'hooks';
import { logOut } from 'store/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <Wrapper>
        <UserName>Welcome, {user.name}</UserName>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </Button>
      </Wrapper>
    </>
  );
};
