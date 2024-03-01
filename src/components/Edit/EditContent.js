import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '@constants/colors';
import useTodoListStore from '@store/TodoListStore';

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
  color: ${(props) =>
    props.page.length > 3 ? COLORS.grayText : COLORS.pointColor};
  font-weight: 700;
  margin-bottom: 16px;
`;

const EditContentText = styled.TextInput`
  font-size: 16px;
  color: ${COLORS.grayText};
  font-weight: 500;
  text-align: right;
`;

const EditContent = ({ setPage, page, content }) => {
  const setEditContent = useTodoListStore((state) => state.setEditContent);
  const inputRef = useRef(null);
  const [text, setText] = useState(content);
  return (
    <EditContentView
      onPress={() => inputRef.current && inputRef.current.focus()}
    >
      <EditText page={page}>내용</EditText>
      <EditContentText
        ref={inputRef}
        onChangeText={setText}
        value={text}
        onBlur={() => {
          inputRef.current.blur();
          setPage((state) => [...state, 'submit']);
          setEditContent(text);
        }}
        autoFocus={true}
        maxLength={24}
      />
    </EditContentView>
  );
};

export default EditContent;
