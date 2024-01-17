import svgSprite from '../assets/svg/sprite.svg';

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  color?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || '24'}
      height={props.height || '24'}
      viewBox={`0 0 ${props.width} ${props.height}` || '0 0 24 24'}
      fill="none"
      color={props.color}
      xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${svgSprite}#${props.iconId}`}></use>
    </svg>
  );
};
