import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.styled';
import { theme } from '../../styles/Theme.styled';

import { LogOut } from './LogOut/LogOut';
import { Menu } from './menu/Menu';

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="space-between" align="center">
        <LogOut />
        <Menu />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid ${theme.colors.grey.light};
`;
