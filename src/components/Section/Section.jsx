import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    {/* {title && <Title>{title}</Title>} */}
    {children}
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
