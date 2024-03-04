import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import TodoCard from '@components/Home/TodoCard';
import useTodoListStore from '@store/TodoListStore';
import AddIcon from '@svg/todoList/AddIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const NewTodoButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-top: 8px;
  margin-right: 4px;
  padding: 12px;
  border-radius: 50px;
  border-width: 1px;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
`;

const TodoList = () => {
  const [calendarTodoList, selectedDate] = useTodoListStore((state) => [
    state.calendarTodoList,
    state.selectedDate,
  ]);
  const selectedTodoList = calendarTodoList[selectedDate] ?? [];
  const navigation = useNavigation();
  return (
    <TodoListView>
      <TodoListTopView>
        <TodoListTitle>To Do List</TodoListTitle>
        <TodoListAmount>
          {selectedTodoList.reduce(
            (acc, cur) => (cur.isSuccess ? acc + 1 : acc),
            0,
          )}{' '}
          / {selectedTodoList.length}
        </TodoListAmount>
      </TodoListTopView>
      <TodoCardWrapper>
        {selectedTodoList.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </TodoCardWrapper>
      <NewTodoButton onPress={() => navigation.navigate('Edit')}>
        <AddIcon width="20px" height="20px" fill={COLORS.textWhite} />
      </NewTodoButton>
    </TodoListView>
  );
};

export default TodoList;
