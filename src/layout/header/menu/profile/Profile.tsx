import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { theme } from '../../../../styles/Theme.styled';
import ava from './../../../../assets/images/profile.webp';

export const Profile = () => {
  return (
    <StyledProfile>
      <Button>Dinning option</Button>
      <Button
        color={theme.colors.font}
        bgColor={theme.colors.bgButtonSc}>
        10:53:00 26/02/2023
      </Button>
      <ProfileImage src={ava} alt="Avatar" />
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  ${Button} {
    padding: 8px 20px;
  }
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
