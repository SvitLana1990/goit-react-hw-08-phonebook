import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1150px;
  padding: 10px 15px;
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(5)};
`;
