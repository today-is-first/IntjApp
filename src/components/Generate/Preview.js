import React, { forwardRef } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import Dash from 'react-native-dash';
import useTodoListStore from '@store/TodoListStore';
import TodoReceipt from '@components/Generate/TodoReceipt';
import useTodoTimerStore from '@store/TodoTimer';

const PreviewView = styled.View`
  width: 80%;
  height: auto;
  background-color: ${COLORS.bottomSheetBackGround};
  justify-content: center;
  padding: 18px 30px;
  border-radius: 12px;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
  border-width: 2px;
  align-items: center;
`;

const CustomDash = ({
  width = '100%',
  dashGap = 10,
  dashLength = 12,
  dashThickness = 1,
}) => (
  <Dash
    style={[{ width: width, height: 0 }]}
    dashGap={dashGap}
    dashLength={dashLength}
    dashThickness={dashThickness}
    dashColor={COLORS.textWhite}
  />
);

const Title = styled.Text`
  margin: 24px 0;
  color: ${COLORS.textWhite};
  font-size: 24px;
  font-family: 'Lora';
`;

const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const TotalEffortTimeWrapper = styled.View`
  width: 80%;
  margin: 18px 0;
  flex-direction: row;
  justify-content: space-between;
`;

const TotalEffortTime = styled.Text`
  color: ${COLORS.textWhite};
`;

const TodoListWrapper = styled.View`
  margin: 12px 0 24px;
`;

const Preview = forwardRef((props, ref) => {
  const [selectedDate, calendarTodoList] = useTodoListStore((state) => [
    state.selectedDate,
    state.calendarTodoList,
  ]);

  const effortTime = useTodoTimerStore((state) => state.effortTime);
  const selectedTodoList = calendarTodoList[selectedDate] ?? [];
  return (
    <PreviewView ref={ref}>
      <CustomDash />
      <Title>{selectedDate.split('-').join(' . ')}</Title>
      <CustomDash />
      <TodoListWrapper>
        {selectedTodoList &&
          selectedTodoList.map((todo) => (
            <TodoReceipt key={todo.id} {...todo} />
          ))}
      </TodoListWrapper>
      <CustomDash width="80%" dashThickness={1} dashGap={5} dashLength={7} />
      <TotalEffortTimeWrapper>
        <TotalEffortTime>Total Time</TotalEffortTime>
        <TotalEffortTime>{formatTime(effortTime)}</TotalEffortTime>
      </TotalEffortTimeWrapper>
      <CustomDash width="80%" dashThickness={1} dashGap={5} dashLength={7} />
    </PreviewView>
  );
});

export default Preview;
