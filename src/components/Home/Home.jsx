import { useSelector } from 'react-redux';
import { selectIsLogIn } from 'store/auth/authSelectors';
import { Image, LinkContainer, LinkStyled, Title } from './Home.styled';
import image from '../../assets/images/swg/home-img.svg';
import heroimage from '../../assets/images/swg/welcome-img.svg';

export const Home = () => {
  const isLogin = useSelector(selectIsLogIn);
  return (
    <>
      {isLogin ? (
        <>
          <Title>Welcome to your PhoneBook</Title>
          <Image src={image} alt="Welcome to your phone book" />
        </>
      ) : (
        <>
          <Image src={heroimage} alt="Welcome to your phone book" />
          <LinkContainer>
            <LinkStyled to="/register">Sign up</LinkStyled>
            <LinkStyled to="/login">Sign In</LinkStyled>
          </LinkContainer>
        </>
      )}
    </>
  );
};
