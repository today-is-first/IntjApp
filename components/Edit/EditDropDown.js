import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';

const EditDropDownView = styled.View`
  background-color: ${COLORS.textWhite};
  padding: 16px 24px;
  margin: 0px 6px 0px;
  height: 200px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  position: fixed;
  z-index: -1;
`;

const EditDropDown = () => {
  return <EditDropDownView></EditDropDownView>;
};

export default EditDropDown;
