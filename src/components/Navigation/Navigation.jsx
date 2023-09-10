import { useAuth } from 'hooks';
import { Nav, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
      </Nav>
    </>
  );
};

export default Navigation;
