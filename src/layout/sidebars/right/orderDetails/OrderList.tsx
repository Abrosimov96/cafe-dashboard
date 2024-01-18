import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { Icon } from '../../../../components/Icon';
import { theme } from '../../../../styles/Theme.styled';

type OrderListPropsType = {
  imgSrc: string;
  disheTitle: string;
  dishePrice: number;
  disheCount: number;
};

export const OrderList = (props: OrderListPropsType) => {
  return (
    <OrderItem>
      <DishePhoto src={props.imgSrc} alt="Dishe" />
      <FlexWrapper flex="1" directionColumn gap="8">
        <DisheTitle>{props.disheTitle}</DisheTitle>
        <FlexWrapper align="center" justify="space-between">
          <FlexWrapper directionColumn>
            <PriceSpan>Price</PriceSpan>
            <DishePrice>
              $ {props.dishePrice * props.disheCount}
            </DishePrice>
          </FlexWrapper>
          <FlexWrapper align="center" gap="12">
            <Button
              bgColor={theme.colors.grey.light}
              color={theme.colors.grey.dark}>
              <Icon iconId="minus" width="20" height="20" />
            </Button>
            <DisheCount>{props.disheCount}</DisheCount>
            <Button
              bgColor={theme.colors.font}
              color={theme.colors.primary}>
              <Icon iconId="plus" width="20" height="20" />
            </Button>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </OrderItem>
  );
};

const OrderItem = styled.li`
  display: flex;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.grey.light};

  ${FlexWrapper} {
    ${Button} {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
  }
`;

const DishePhoto = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 12px;
  object-fit: cover;
`;

const DisheTitle = styled.h3`
  font-size: 16px;

  font-weight: 600;
  line-height: 1.5;
`;

const DisheCount = styled.span``;

const PriceSpan = styled.span`
  color: ${theme.colors.grey.dark};

  font-size: 12px;

  font-weight: 400;
  line-height: 1.3; /* 15.6px */
`;

const DishePrice = styled.span`
  color: ${theme.colors.accent};

  font-size: 16px;

  font-weight: 600;
  line-height: 1.5; /* 24px */
`;
