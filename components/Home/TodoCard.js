import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';

const TodoCardView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 24px 6px 0px;
  padding: 12px 24px;
  border-radius: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodoCardTime = styled.Text`
  color: ${COLORS.pointColor};
  font-size: 14px;
  font-weight: 400;
`;

const TodoCardText = styled.Text`
  color: ${COLORS.pointColor};
  font-size: 16px;
  font-weight: 600;
`;

const TodoCard = () => {
  return (
    <TodoCardView>
      <TodoCardTime>|| 11:00</TodoCardTime>
      <TodoCardText>토익 단어 외우기</TodoCardText>
    </TodoCardView>
  );
};

export default TodoCard;
