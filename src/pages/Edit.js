import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import Header from '@components/@common/Header';
import EditTitle from '@components/Edit/EditTitle';
import EditTime from '@components/Edit/EditTime';
import EditType from '@components/Edit/EditType';
import EditContent from '@components/Edit/EditContent';
import useTodoListStore from '@store/TodoListStore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const EditPageView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const EditView = styled.View``;

const SubmitButton = styled(TouchableOpacity)`
  margin: auto;
  margin-bottom: 36px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.textWhite};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const SaveText = styled.Text`
  font-family: 'Lora';
  font-size: 20px;
  color: ${COLORS.textWhite};
`;

const Edit = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState([]);
  const route = useRoute();
  const id = route.params?.id;
  const [updateTodo, addTodo, calendarTodoList, selectedDate] =
    useTodoListStore((state) => [
      state.updateTodo,
      state.addTodo,
      state.calendarTodoList,
      state.selectedDate,
    ]);
  const todo = id
    ? calendarTodoList[selectedDate].find((el) => el.id === id)
    : { title: '', time: '', type: '', content: '' };

  return (
    <EditPageView>
      <Header arrow={true} moreVert={true} />
      <EditView>
        {page.includes('submit') ? (
          <SubmitButton
            onPress={() => {
              id ? updateTodo(id) : addTodo();
              navigation.navigate('Home');
            }}
          >
            <SaveText>done?</SaveText>
          </SubmitButton>
        ) : (
          ''
        )}

        {page.includes('content') ? (
          <EditContent setPage={setPage} page={page} content={todo.content} />
        ) : (
          ''
        )}
        {page.includes('type') ? (
          <EditType setPage={setPage} page={page} type={todo.type} />
        ) : (
          ''
        )}
        {page.includes('time') ? (
          <EditTime setPage={setPage} page={page} time={todo.time} />
        ) : (
          ''
        )}
        <EditTitle setPage={setPage} page={page} title={todo.title} />
      </EditView>
    </EditPageView>
  );
};

export default Edit;
