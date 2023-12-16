import { useAuth } from 'hooks';
import { NavContainer, NavLinks } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <NavLinks to="/">Home</NavLinks>
      {isLoggedIn && <NavLinks to="/contacts">Contacts</NavLinks>}
    </NavContainer>
  );
};
