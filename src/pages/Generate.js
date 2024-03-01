import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import useTodoListStore from '@store/TodoListStore';

const GenerateView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const Generate = () => {
  const todoList = useTodoListStore();
  return <GenerateView></GenerateView>;
};

export default Generate;
