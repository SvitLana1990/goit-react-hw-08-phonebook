import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: ${p => p.theme.spacing(3)} 0;
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 12px;
  gap: ${p => p.theme.spacing(3)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  color: ${p => p.theme.colors.black};
  font-weight: 500;
  &:hover {
    color: ${p => p.theme.colors.beige};
  }
`;

export const Field = styled.input`
  width: 250px;
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 4px;
`;

export const LogInButton = styled.button`
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
