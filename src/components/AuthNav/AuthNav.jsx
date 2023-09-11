import React from 'react';
import { Auth, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Auth>
        <NavLinkStyled to="/register">Sign up</NavLinkStyled>
        <NavLinkStyled to="/login">Sign In</NavLinkStyled>
      </Auth>
    </>
  );
};
