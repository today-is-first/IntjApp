import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import TodoCard from '@components/Home/TodoCard';
import useTodoListStore from '@store/TodoListStore';

const TodoListView = styled.View`
  margin: 16px 18px;
  padding: 18px 30px;
  border-radius: 12px;
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
  font-family: 'Lora';
  color: ${COLORS.textWhite};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TodoListAmount = styled.Text`
  font-family: 'Lora';
  color: ${COLORS.textWhite};
  font-size: 14px;
  font-weight: 400;
`;

const TodoCardWrapper = styled.View`
  border-top-width: 1px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-color: ${COLORS.grayText};
  margin: 8px 0;
  padding-top: 8px;
`;

const TodoList = () => {
  const todoList = useTodoListStore((state) => state.todoList);
  return (
    <TodoListView>
      <TodoListTopView>
        <TodoListTitle>To Do List</TodoListTitle>
        <TodoListAmount>
          {todoList.reduce((acc, cur) => (cur.isSuccess ? acc + 1 : acc), 0)} /{' '}
          {todoList.length}
        </TodoListAmount>
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
