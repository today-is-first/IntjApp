import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';
import EditTitle from '../components/Edit/EditTitle';
import EditTime from '../components/Edit/EditTime';
import EditType from '../components/Edit/EditType';
import EditContent from '../components/Edit/EditContent';
import useTodoListStore from '../store/TodoListStore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import SaveIcon from '../assets/svgs/todoList/SaveIcon';

const EditPageView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const EditView = styled.View``;

const SubmitButton = styled(TouchableOpacity)`
  margin: auto;
  margin-bottom: 24px;
  padding: 12px 18px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${COLORS.pointColor};
  background-color: ${COLORS.textWhite};
  justify-content: center;
  align-items: center;
`;

const Edit = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState([]);
  const route = useRoute();
  const { id } = route.params;
  const todoList = useTodoListStore((state) => state.todoList);
  const todo = todoList.filter((el) => el.id === id);
  const updateTodo = useTodoListStore((state) => state.updateTodo);

  return (
    <EditPageView>
      <Header arrow={true} moreVert={true} />
      <EditView>
        {page.includes('submit') ? (
          <SubmitButton
            onPress={() => {
              updateTodo(id);
              navigation.navigate('Home');
            }}
          >
            <SaveIcon width="36px" height="36px" fill={COLORS.pointColor} />
          </SubmitButton>
        ) : (
          ''
        )}

        {page.includes('content') ? (
          <EditContent
            setPage={setPage}
            page={page}
            content={todo ? todo[0].content : ''}
          />
        ) : (
          ''
        )}
        {page.includes('type') ? (
          <EditType
            setPage={setPage}
            page={page}
            type={todo ? todo[0].type : ''}
          />
        ) : (
          ''
        )}
        {page.includes('time') ? (
          <EditTime
            setPage={setPage}
            page={page}
            time={todo ? todo[0].time : ''}
          />
        ) : (
          ''
        )}
        <EditTitle
          setPage={setPage}
          page={page}
          title={todo ? todo[0].title : ''}
        />
      </EditView>
    </EditPageView>
  );
};

export default Edit;
