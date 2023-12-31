import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 4px;
  display: flex;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(5)};
`;
