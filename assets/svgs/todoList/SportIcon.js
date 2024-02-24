import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SportIcon = ({ width = '24', height = '24', fill }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M4 5C4 3.9 4.9 3 6 3C7.1 3 8 3.9 8 5C8 6.1 7.1 7 6 7C4.9 7 4 6.1 4 5ZM1 8H7L14 3L15.31 4.52L11.14 7.5H14L21.8 3L23 4.4L14.5 11L14 21H12L11.5 11L8 10H1V8Z"
      fill={fill}
    />
  </Svg>
);

export default React.memo(SportIcon);
