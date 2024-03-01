import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '@constants/colors';
import useTodoListStore from '@store/TodoListStore';

const EditContentView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 18px;
  padding: 18px 30px;
  border-radius: 8px;
  border-top-color: rgba(242, 242, 242, 1);
  border-left-color: rgba(242, 242, 242, 1);
  border-bottom-color: rgba(16, 16, 16, 1);
  border-right-color: rgba(16, 16, 16, 1);
  border-width: 1px;
`;

const EditText = styled.Text`
  font-family: 'Lora';
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 3 ? COLORS.grayText : COLORS.mainBackGround};
  font-weight: 400;
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
      <EditText page={page}>Content</EditText>
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
