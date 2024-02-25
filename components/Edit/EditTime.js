import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import Picker from '../../utils/Picker';

const EditTimeView = styled.View`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 24px;
  padding: 18px 30px;
  border-radius: 24px;
  border-top-color: rgba(1, 0, 254, 0.5);
  border-left-color: rgba(1, 0, 254, 0.5);
  border-bottom-color: rgba(1, 0, 254, 1);
  border-right-color: rgba(1, 0, 254, 1);
  border-width: ${(props) => (props.page.length > 1 ? '0px' : '1px')};
`;

const EditText = styled.Text`
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 1 ? COLORS.grayText : COLORS.pointColor};
  font-weight: 700;
  margin-bottom: 16px;
`;

const EditTime = ({ setPage, page }) => {
  const inputRef = useRef(null);
  const [text, setText] = useState('토익 영어 단어 외우기');
  return (
    <EditTimeView page={page}>
      <EditText page={page}>시간</EditText>
      <Picker />
    </EditTimeView>
  );
};

export default EditTime;
