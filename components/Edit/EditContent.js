import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';

const EditContentView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 24px;
  padding: 18px 30px;
  border-radius: 24px;
  border-top-color: rgba(1, 0, 254, 0.5);
  border-left-color: rgba(1, 0, 254, 0.5);
  border-bottom-color: rgba(1, 0, 254, 1);
  border-right-color: rgba(1, 0, 254, 1);
  border-width: 1px;
`;

const EditText = styled.Text`
  font-size: 20px;
  color: ${COLORS.pointColor};
  font-weight: 700;
  margin-bottom: 16px;
`;

const EditContentText = styled.TextInput`
  font-size: 16px;
  color: ${COLORS.grayText};
  font-weight: 500;
  text-align: right;
`;

const EditContent = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('토익 영어 단어 외우기');
  return (
    <EditContentView
      onPress={() => inputRef.current && inputRef.current.focus()}
    >
      <EditText>내용</EditText>
      <EditContentText
        ref={inputRef}
        onChangeText={setText}
        value={text}
        onBlur={() => {
          inputRef.current.blur();
        }}
        autoFocus={true}
        maxLength={24}
      />
    </EditContentView>
  );
};

export default EditContent;