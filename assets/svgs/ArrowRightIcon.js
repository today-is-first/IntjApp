import Svg, { Path } from 'react-native-svg';

const ArrowRightIcon = ({ width = '24', height = '24', fill }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M9.5 17L14.5 12L9.5 7V17Z" fill={fill} />
  </Svg>
);

export default ArrowRightIcon;
