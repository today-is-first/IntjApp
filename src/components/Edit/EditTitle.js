import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '@constants/colors';
import useTodoListStore from '@store/TodoListStore';

const EditTitleView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 0px;
  padding: 18px 30px;
  border-radius: 8px;
  border-top-color: rgba(242, 242, 242, 1);
  border-left-color: rgba(242, 242, 242, 1);
  border-bottom-color: rgba(16, 16, 16, 1);
  border-right-color: rgba(16, 16, 16, 1);
  border-width: ${(props) => (props.page.length > 0 ? '0px' : '1px')};
`;
const EditText = styled.Text`
  font-family: 'Lora';
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 0 ? COLORS.grayText : COLORS.mainBackGround};
  font-weight: 400;
  margin-bottom: 16px;
`;

const EditContent = styled.TextInput`
  font-size: 16px;
  color: ${COLORS.grayText};
  font-weight: 500;
  text-align: right;
`;

const EditTitle = ({ setPage, page, title }) => {
  const setEditTitle = useTodoListStore((state) => state.setEditTitle);
  const inputRef = useRef(null);
  const [text, setText] = useState(title);
  return (
    <EditTitleView
      onPress={() => inputRef.current && inputRef.current.focus()}
      page={page}
    >
      <EditText page={page}>Todo</EditText>
      <EditContent
        ref={inputRef}
        onChangeText={setText}
        value={text}
        onBlur={() => {
          inputRef.current.blur();
          setPage((state) => [...state, 'time']);
          setEditTitle(text);
        }}
        autoFocus={true}
        maxLength={24}
        page={page}
      />
    </EditTitleView>
  );
};

export default EditTitle;
