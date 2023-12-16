import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 550px;
  padding: ${p => p.theme.spacing(3)};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${p => p.theme.spacing(2)};
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 12px;
  margin: 0 auto;
`;
