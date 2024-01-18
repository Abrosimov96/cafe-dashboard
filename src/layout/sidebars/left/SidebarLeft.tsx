import styled from 'styled-components';
import { Icon } from '../../../components/Icon';
import { theme } from '../../../styles/Theme.styled';

const sidebarItems = [
  {
    iconId: 'coffee',
    label: 'Coffee',
  },
  {
    iconId: 'beverages',
    label: 'Beverages',
  },
  {
    iconId: 'food',
    label: 'Food',
  },
  {
    iconId: 'pasta',
    label: 'Pasta',
  },
  {
    iconId: 'cakes',
    label: 'Cakes',
  },
  {
    iconId: 'snack',
    label: 'Snack',
  },
];

export const SidebarLeft = () => {
  return (
    <StyledSidebarLeft>
      <SidebarList>
        {sidebarItems.map((item) => (
          <SidebarItems>
            <Link>
              <Icon iconId={item.iconId} width="33" height="32" />
              {item.label}
            </Link>
          </SidebarItems>
        ))}
      </SidebarList>
    </StyledSidebarLeft>
  );
};

const StyledSidebarLeft = styled.div`
  min-height: 100vh;
  padding: 24px;
  position: absolute;
  border-right: 1px solid ${theme.colors.grey.light};
  left: 0;
`;

const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Link = styled.a`
  min-width: 77px;
  color: ${theme.colors.grey.dark};
  font-size: 12px;
  font-weight: 500;
  line-height: 116%;
  padding: 8px;

  border-radius: 8px;

  &:hover {
    background-image: linear-gradient(
      219deg,
      #ffab18 -6.67%,
      #ff2197 137.69%
    );
    border-radius: 8px;
    color: ${theme.colors.primary};
  }
`;

const SidebarItems = styled.li`
  ${Link} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  padding: 12px 6px;
`;
