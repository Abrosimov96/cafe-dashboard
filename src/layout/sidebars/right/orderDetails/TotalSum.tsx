import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { theme } from '../../../../styles/Theme.styled';

export const TotalSum = () => {
  return (
    <StyledTotalSum>
      <FlexWrapper justify="space-between">
        <span>Sub Total</span>
        <span>$ 62.13</span>
      </FlexWrapper>
      <FlexWrapper justify="space-between">
        <span>Tax (10%)</span>
        <span>$ 1.87</span>
      </FlexWrapper>
      <DividerDashed />
      <FlexWrapper justify="space-between">
        <span>Total</span>
        <span>$ 64.00</span>
      </FlexWrapper>
    </StyledTotalSum>
  );
};

const StyledTotalSum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DividerDashed = styled.div`
  margin-bottom: 16px;
  border: 1px dashed ${theme.colors.grey.light};
`;
