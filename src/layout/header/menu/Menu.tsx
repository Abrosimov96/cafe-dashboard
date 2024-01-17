import styled from 'styled-components';
import { MenuItems } from './menuItems/MenuItems';
import { Profile } from './profile/Profile';

const menuItems = [
  {
    iconId: 'home',
    label: 'Home',
  },
  {
    iconId: 'order',
    label: 'Order',
  },
  {
    iconId: 'history',
    label: 'History',
  },
  {
    iconId: 'bills',
    label: 'Bills',
  },
];

export const Menu = () => {
  return (
    <StyledMenu>
      <MenuItems items={menuItems} />
      <Profile />
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
