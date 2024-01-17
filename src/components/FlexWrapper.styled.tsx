import styled from 'styled-components';

type FlexWrapperPropsType = {
  directionColumn?: boolean;
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'start' | 'end';
  wrap?: boolean;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) =>
    props.directionColumn ? 'column' : 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  gap: ${(props) => (props.gap ? `${props.gap}px` : '0')};
  height: 100%;
  position: relative;
`;
