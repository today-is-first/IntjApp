import Svg, { Path } from 'react-native-svg';

const PauseIcon = ({ width = '24', height = '24', fill }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill={fill} />
  </Svg>
);

export default PauseIcon;
