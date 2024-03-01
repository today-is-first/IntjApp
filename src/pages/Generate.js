import React from 'react';
import styled from 'styled-components';
import useTodoListStore from '@store/TodoListStore';

const GenerateView = styled.View``;

const Generate = () => {
  const todoList = useTodoListStore();
  return <GenerateView></GenerateView>;
};

export default Generate;
