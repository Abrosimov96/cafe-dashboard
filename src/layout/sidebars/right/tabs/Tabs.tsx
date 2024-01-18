import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { theme } from '../../../../styles/Theme.styled';

export const Tabs = () => {
  return (
    <StyledTabs>
      <Button
        color={theme.colors.font}
        bgColor={theme.colors.primary}>
        Buy
      </Button>
      <Button color={theme.colors.grey.dark} bgColor="transparent">
        Reservation
      </Button>
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  padding: 4px;
  border-radius: 80px;
  background-color: ${theme.colors.grey.light};
  margin-bottom: 28px;
  ${Button} {
    min-width: 152px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4; /* 19.6px */
  }
`;
