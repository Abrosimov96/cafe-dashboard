import React from 'react';
import styled from 'styled-components';
import { TitleInfo } from '../TitleInfo.styled';
import { OrderList } from './OrderList';
import dishe1 from '../../../../assets/images/menu/dishe1.webp';
import dishe2 from '../../../../assets/images/menu/dishe2.webp';
import dishe3 from '../../../../assets/images/menu/dishe3.webp';
import { TotalSum } from './TotalSum';

const orderItems = [
  {
    imgSrc: dishe1,
    disheTitle: 'Mie kuah pedas',
    dishePrice: 11.21,
    disheCount: 1,
  },
  {
    imgSrc: dishe2,
    disheTitle: 'Steak sapi bakar',
    dishePrice: 25.12,
    disheCount: 1,
  },
  {
    imgSrc: dishe3,
    disheTitle: 'Ayam kentang',
    dishePrice: 15.4,
    disheCount: 1,
  },
];

export const OrderDetails = () => {
  return (
    <StyledOrderDetails>
      <TitleInfo>Orders details</TitleInfo>
      <StyledOrderList>
        {orderItems.map((item) => (
          <OrderList
            imgSrc={item.imgSrc}
            disheTitle={item.disheTitle}
            dishePrice={item.dishePrice}
            disheCount={item.disheCount}
          />
        ))}
      </StyledOrderList>
      <TotalSum />
    </StyledOrderDetails>
  );
};

const StyledOrderDetails = styled.div``;

const StyledOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  overflow-y: scroll;
`;
