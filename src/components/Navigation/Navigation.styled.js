import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(3)};
  align-items: center;
  justify-content: flex-start;
`;

export const NavLinks = styled(NavLink)`
  display: block;
  font-weight: 500;
  text-align: center;
  width: 150px;
  padding: ${p => p.theme.spacing(1)};
  background-color: ${p => p.theme.colors.beige};
  color: ${p => p.theme.colors.greyDark};
  border: 2px solid ${p => p.theme.colors.beige};
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.greyDark};
    color: ${p => p.theme.colors.beige};
  }
`;
