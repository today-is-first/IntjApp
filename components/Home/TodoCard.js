import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';
import FoodIcon from '../../assets/svgs/todoList/FoodIcon';
import SportIcon from '../../assets/svgs/todoList/SportIcon';
import StudyIcon from '../../assets/svgs/todoList/StudyIcon';
import { useNavigation } from '@react-navigation/native';
import useTodoListStore from '../../store/TodoListStore';

const TodoCardView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 24px 6px 0px;
  padding: 16px 24px;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-color: rgba(1, 0, 254, 0.5);
  border-left-color: rgba(1, 0, 254, 0.5);
  border-bottom-color: rgba(1, 0, 254, 1);
  border-right-color: rgba(1, 0, 254, 1);
  border-width: ${(props) => (props.isActive ? '1px' : '0')};
`;

const CardLeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const TodoCardTime = styled.Text`
  color: ${(props) => (props.isActive ? COLORS.pointColor : COLORS.grayText)};
  font-size: 14px;
  font-weight: 400;
`;

const TodoCardText = styled.Text`
  color: ${(props) => (props.isActive ? COLORS.pointColor : COLORS.grayText)};
  font-size: 16px;
  font-weight: 600;
`;

const icons = {
  공부: StudyIcon,
  운동: SportIcon,
  음식: FoodIcon,
};

const IconSwitcher = ({ type, isActive }) => {
  const SelectedIcon = icons[type] || StudyIcon;
  return (
    <SelectedIcon
      width="16px"
      height="16px"
      fill={isActive ? COLORS.pointColor : COLORS.grayText}
    />
  );
};

const TodoCard = ({ id, title, time, type }) => {
  const navigation = useNavigation();
  const todoId = useTodoListStore((state) => state.todoId);
  return (
    <TodoCardView
      isActive={todoId === id}
      onPress={() => navigation.navigate('Edit')}
    >
      <CardLeftWrapper>
        {IconSwitcher({ type, isActive: todoId === id })}
        <TodoCardTime isActive={todoId === id}>{time}</TodoCardTime>
      </CardLeftWrapper>
      <TodoCardText isActive={todoId === id}>{title}</TodoCardText>
    </TodoCardView>
  );
};

export default TodoCard;
