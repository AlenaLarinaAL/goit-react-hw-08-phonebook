import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UserName = styled.p`
  margin: 0;
  display: block;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  border-radius: 5px;
  background-color: rgba(242, 163, 65, 0.2);
  color: ${theme.colors.light};
  transition: ${theme.animation.duration}, ${theme.animation.cubicBezier};

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;
