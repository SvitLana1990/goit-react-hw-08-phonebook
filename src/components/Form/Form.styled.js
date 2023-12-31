import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikError,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(3)};
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 12px;
  padding: ${p => p.theme.spacing(3)} 0;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
`;

export const Field = styled(FormikField)`
  width: 250px;
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 4px;
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

export const Button = styled.button`
  width: 150px;
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
