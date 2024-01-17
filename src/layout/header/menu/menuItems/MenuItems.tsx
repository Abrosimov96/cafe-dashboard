import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';

type MenuItemsPropsType = {
  iconId: string;
  label: string;
};

type MenuPropsType = {
  items: Array<MenuItemsPropsType>;
};

export const MenuItems = (props: MenuPropsType) => {
  return (
    <StyledNavigation>
      <NavList>
        {props.items.map((item) => (
          <ListItem>
            <Icon iconId={item.iconId} />
            {item.label}
          </ListItem>
        ))}
      </NavList>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav``;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`;
