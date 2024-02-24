import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import TodoCard from './TodoCard';
import useTodoListStore from '../../store/TodoListStore';

const TodoListView = styled.View`
  margin: 24px 18px;
  padding: 18px 30px;
  border-radius: 24px;
  background-color: ${COLORS.bottomSheetBackGround};
  justify-content: center;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
  border-width: 2px;
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
  const todoList = useTodoListStore((state) => state.todoList);
  return (
    <TodoListView>
      <TodoListTopView>
        <TodoListTitle>To Do List</TodoListTitle>
        <TodoListAmount>1 /12</TodoListAmount>
      </TodoListTopView>
      <TodoCardWrapper>
        {todoList.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </TodoCardWrapper>
    </TodoListView>
  );
};

export default TodoList;
