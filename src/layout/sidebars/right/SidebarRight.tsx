import styled from 'styled-components';
import { theme } from '../../../styles/Theme.styled';
import { CustomerInfo } from './customerInfo/CustomerInfo';
import { OrderDetails } from './orderDetails/OrderDetails';

import { Tabs } from './tabs/Tabs';

export const SidebarRight = () => {
  return (
    <StyledSidebarRight>
      <Tabs />
      <CustomerInfo />
      <Divider />
      <OrderDetails />
    </StyledSidebarRight>
  );
};

const StyledSidebarRight = styled.div`
  min-height: 100vh;
  padding: 16px 24px;
  position: absolute;
  right: 0;
  border-left: 1px solid ${theme.colors.grey.light};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.grey.light};
  margin-bottom: 24px;
`;
