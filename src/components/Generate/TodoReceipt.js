import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import FoodIcon from '@svg/todoList/FoodIcon';
import SportIcon from '@svg/todoList/SportIcon';
import StudyIcon from '@svg/todoList/StudyIcon';

const TodoReceiptView = styled.View`
  width: 80%;
  margin-top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${COLORS.textWhite};
`;

const LeftSide = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const icons = {
  공부: StudyIcon,
  운동: SportIcon,
  밥: FoodIcon,
};

const IconSwitcher = ({ type }) => {
  const SelectedIcon = icons[type] || StudyIcon;
  return <SelectedIcon width="16px" height="16px" fill={COLORS.textWhite} />;
};

const TodoReceipt = ({ id, title, time, type, content, isSuccess }) => {
  return (
    <TodoReceiptView>
      <LeftSide>
        {IconSwitcher({ type })}
        <StyledText>
          {new Date(parseInt(time)).toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
          })}
        </StyledText>
      </LeftSide>
      <StyledText>{title}</StyledText>
    </TodoReceiptView>
  );
};

export default TodoReceipt;
