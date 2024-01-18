import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { Icon } from '../../../../components/Icon';
import { theme } from '../../../../styles/Theme.styled';
import { TitleInfo } from '../TitleInfo.styled';

export const CustomerInfo = () => {
  return (
    <StyledCustomerInfo>
      <TitleInfo>Customer Information</TitleInfo>
      <CustomerForm>
        <FormFiel placeholder="Customer name" />
        <Button bgColor="transparent" color={theme.colors.grey.dark}>
          Select table
          <Icon iconId="chevronRight" width="24" height="24" />
        </Button>
      </CustomerForm>
      <Button>Add note</Button>
    </StyledCustomerInfo>
  );
};

const StyledCustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  ${Button} {
    padding: 12px 0;

    font-size: 16px;

    font-weight: 600;
    line-height: 1.5; /* 24px */
  }
`;

const CustomerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${Button} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 58px;
    border: 1px solid ${theme.colors.grey.light};
    color: ${theme.colors.grey.dark};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5; /* 24px */
  }
`;

const FormFiel = styled.input`
  padding: 12px 16px;
  border-radius: 58px;
  border: 1px solid ${theme.colors.grey.light};
  color: ${theme.colors.grey.dark};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5; /* 24px */
`;
