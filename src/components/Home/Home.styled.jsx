import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles/theme';

export const Title = styled.h1`
  text-align: center;
`;
export const Image = styled.img``;
export const LinkStyled = styled(Link)`
  width: 150px;
  padding: 10px 20px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(242, 163, 65, 0.2);
  color: ${theme.colors.light};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.1);
  }
  margin-top: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
