import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(3)};
`;

export const WelcomeUserText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${p => p.theme.colors.white};
  text-decoration: underline;
`;

export const LogoutButton = styled.button`
  width: 250px;
  font-weight: 500;
  padding: ${p => p.theme.spacing(1)};
  background: ${p => p.theme.colors.beige};
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 4px;
  color: ${p => p.theme.colors.greyDark};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.beige};
    background: ${p => p.theme.colors.greyDark};
  }
`;
