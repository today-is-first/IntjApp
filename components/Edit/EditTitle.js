import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import useTodoListStore from '../../store/TodoListStore';

const EditTitleView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 0px;
  padding: 18px 30px;
  border-radius: 24px;
  border-top-color: rgba(1, 0, 254, 0.5);
  border-left-color: rgba(1, 0, 254, 0.5);
  border-bottom-color: rgba(1, 0, 254, 1);
  border-right-color: rgba(1, 0, 254, 1);
  border-width: ${(props) => (props.page.length > 0 ? '0px' : '1px')};
`;
const EditText = styled.Text`
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 0 ? COLORS.grayText : COLORS.pointColor};
  font-weight: 700;
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
      <EditText page={page}>오늘 할 것</EditText>
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
