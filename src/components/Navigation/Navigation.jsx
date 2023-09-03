import { Nav, NavLinkStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </Nav>
    </>
  );
};

export default Navigation;
