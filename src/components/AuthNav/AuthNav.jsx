import React from 'react';
import { Auth, NavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <Auth>
        <NavLinkStyled to="/register">Registration</NavLinkStyled>
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
      </Auth>
    </>
  );
};
