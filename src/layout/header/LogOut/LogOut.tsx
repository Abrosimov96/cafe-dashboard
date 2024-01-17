import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { Icon } from '../../../components/Icon';
import { theme } from '../../../styles/Theme.styled';

export const LogOut = () => {
  return (
    <FlexWrapper align="center" justify="space-between">
      <FlexWrapper gap="24" align="center">
        <Icon iconId="arrow-left" height="20" width="20" />
        <Divider></Divider>
        <FlexWrapper gap="24" align="center">
          <Icon
            iconId="logo"
            height="44"
            width="44"
            color={theme.colors.accent}
          />
          <FlexWrapper directionColumn>
            <span>Walk-In</span>
            <span>Coca coffeetalk</span>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};

const Divider = styled.div`
  border: 1px solid ${theme.colors.grey.light};
  min-height: 44px;
`;
