import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import TodoCard from './TodoCard';

const TodoListView = styled.View`
  margin: 24px 18px;
  padding: 18px 30px;
  border-radius: 24px;
  background-color: ${COLORS.bottomSheetBackGround};
  justify-content: center;
`;

const TodoListTopView = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const TodoListTitle = styled.Text`
  color: ${COLORS.textWhite};
  font-size: 20px;
  font-weight: 700;
`;

const TodoListAmount = styled.Text`
  color: ${COLORS.textWhite};
  font-size: 14px;
  font-weight: 400;
`;

const TodoCardWrapper = styled.View``;

const TodoList = () => {
  return (
    <TodoListView>
      <TodoListTopView>
        <TodoListTitle>To Do List</TodoListTitle>
        <TodoListAmount>1 /12</TodoListAmount>
      </TodoListTopView>
      <TodoCardWrapper>
        <TodoCard />
      </TodoCardWrapper>
    </TodoListView>
  );
};

export default TodoList;
