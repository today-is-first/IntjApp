import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTodoListStore from '@store/TodoListStore';

const TodoDetailView = styled.View`
  margin-top: 16px;
  border-top-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.mainBackGround};
  border-top-width: 1px;
`;
const ContentView = styled.View`
  margin-top: 12px;
`;
const TodoContent = styled.Text`
  align-self: center;
  color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.mainBackGround};
  text-align: center;
  margin: 12px 0;
  max-width: 210px;
`;

const EditButton = styled(TouchableOpacity)`
  margin-top: 6px;
  padding: 4px 18px;
  border-radius: 4px;
  border-bottom-width: 1px;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.mainBackGround};
`;

const EditButtonText = styled.Text`
  font-family: 'Lora';
  color: ${COLORS.mainBackGround};
  font-size: 12px;
  font-weight: 400;
`;

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TodoDetail = ({ id, content, isSuccess }) => {
  const navigation = useNavigation();
  const setSuccess = useTodoListStore((state) => state.setSuccess);
  return (
    <TodoDetailView isSuccess={isSuccess}>
      <ContentView>
        <TodoContent isSuccess={isSuccess}>{content}</TodoContent>
      </ContentView>
      {isSuccess ? (
        ''
      ) : (
        <ButtonWrapper>
          <EditButton onPress={() => navigation.navigate('Edit', { id: id })}>
            <EditButtonText>Edit?</EditButtonText>
          </EditButton>
          <EditButton onPress={() => setSuccess(id)}>
            <EditButtonText>Success?</EditButtonText>
          </EditButton>
        </ButtonWrapper>
      )}
    </TodoDetailView>
  );
};

export default TodoDetail;
