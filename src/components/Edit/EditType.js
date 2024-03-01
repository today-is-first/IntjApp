import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '@constants/colors';
import FoodIcon from '@svg/todoList/FoodIcon';
import SportIcon from '@svg/todoList/SportIcon';
import StudyIcon from '@svg/todoList/StudyIcon';
import useTodoListStore from '@store/TodoListStore';

const EditTypeView = styled.View`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 18px;
  padding: 18px 30px;
  border-radius: 8px;
  border-top-color: rgba(242, 242, 242, 1);
  border-left-color: rgba(242, 242, 242, 1);
  border-bottom-color: rgba(16, 16, 16, 1);
  border-right-color: rgba(16, 16, 16, 1);
  border-width: ${(props) => (props.page.length > 2 ? '0px' : '1px')};
`;

const EditText = styled.Text`
  font-family: 'Lora';
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 2 ? COLORS.grayText : COLORS.mainBackGround};
  font-weight: 400;
  margin-bottom: 16px;
`;

const IconWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 12px;
`;

const IconTouch = styled(TouchableOpacity)`
  padding: 12px 24px;
`;

const EditType = ({ setPage, page, type }) => {
  const setEditType = useTodoListStore((state) => state.setEditType);
  const inputRef = useRef(null);
  const [updatedType, setUpdatedType] = useState(type);
  const handleOnPress = (type) => {
    setUpdatedType(type);
    setPage((state) => [...state, 'content']);
    setEditType(type);
  };
  return (
    <EditTypeView
      page={page}
      onPress={() => inputRef.current && inputRef.current.focus()}
    >
      <EditText page={page}>Type</EditText>
      <IconWrapper>
        <IconTouch onPress={() => handleOnPress('운동')}>
          <SportIcon
            width="24px"
            height="24px"
            fill={
              updatedType && updatedType === '운동'
                ? COLORS.pointColor
                : COLORS.grayText
            }
          />
        </IconTouch>
        <IconTouch onPress={() => handleOnPress('공부')}>
          <StudyIcon
            width="24px"
            height="24px"
            fill={
              updatedType && updatedType === '공부'
                ? COLORS.pointColor
                : COLORS.grayText
            }
          />
        </IconTouch>
        <IconTouch onPress={() => handleOnPress('밥')}>
          <FoodIcon
            width="24px"
            height="24px"
            fill={
              updatedType && updatedType === '밥'
                ? COLORS.pointColor
                : COLORS.grayText
            }
          />
        </IconTouch>
      </IconWrapper>
    </EditTypeView>
  );
};

export default EditType;
