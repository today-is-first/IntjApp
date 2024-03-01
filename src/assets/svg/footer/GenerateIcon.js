import React from 'react';
import Svg, { Path } from 'react-native-svg';

const GenerateIcon = ({ width = '24', height = '24', fill }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M14 2H4C2.9 2 2 2.9 2 4V14H4V4H14V2ZM18 6H8C6.9 6 6 6.9 6 8V18H8V8H18V6ZM20 10H12C10.9 10 10 10.9 10 12V20C10 21.1 10.9 22 12 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H12V12H20V20Z"
      fill={fill}
    />
  </Svg>
);

export default React.memo(GenerateIcon);
