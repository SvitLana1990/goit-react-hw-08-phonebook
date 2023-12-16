import { AuthNavContainer, NavLinks } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <NavLinks to="/register">Register</NavLinks>
      <NavLinks to="/login">Log In</NavLinks>
    </AuthNavContainer>
  );
};
