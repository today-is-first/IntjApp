import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';

const LoadingView = styled.View`
  background-color: ${COLORS.mainBackGround};
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Loading = () => {
  return <LoadingView></LoadingView>;
};

export default Loading;
