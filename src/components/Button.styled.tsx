import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme.styled';

type ButtonPropsType = {
  secondary?: boolean;
  outlined?: boolean;
  width?: string;
  textAlign?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  bgColor?: string;
};

export const Button = styled.button<ButtonPropsType>`
  font-family: ${(props) => props.fontFamily || 'Poppins'};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || '600'};
  line-height: ${(props) => props.lineHeight || '1.4'};
  background-color: ${(props) =>
    props.bgColor || theme.colors.bgButtonPr};
  color: ${(props) => props.color || theme.colors.accent};

  border-radius: 58px;

  width: ${(props) => props.width || ''};
  text-align: ${(props) => props.textAlign || 'center'};

  ${(props) =>
    props.secondary &&
    css<ButtonPropsType>`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.font};
      border-radius: 12px;
    `}
  ${(props) => props.outlined && css<ButtonPropsType>``}
`;
