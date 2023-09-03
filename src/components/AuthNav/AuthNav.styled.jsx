import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const NavLinkStyled = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;

  :hover,
  :focus {
    :hover,
    :focus {
      opacity: 1;
      transform: scale(1.1);
      color: ${theme.colors.accent};
    }
  }
`;
export const Auth = styled.div`
  display: flex;
  gap: 20px;
`;
