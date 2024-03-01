import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTodoListStore from '@store/TodoListStore';

// 절대 경로 설정

const TodoDetailView = styled.View`
  margin-top: 16px;
  border-top-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.pointColor};
  border-top-width: 1px;
`;
const ContentView = styled.View`
  margin-top: 12px;
`;
const TodoContent = styled.Text`
  align-self: center;
  color: ${(props) => (props.isSuccess ? COLORS.grayText : COLORS.pointColor)};
  text-align: center;
  margin: 12px 0;
  max-width: 210px;
`;

const EditButton = styled(TouchableOpacity)`
  margin-top: 6px;
  padding: 8px 18px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.pointColor};
`;

const EditButtonText = styled.Text`
  color: ${COLORS.textWhite};
  font-size: 12px;
  font-weight: 500;
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
            <EditButtonText>수정</EditButtonText>
          </EditButton>
          <EditButton onPress={() => setSuccess(id)}>
            <EditButtonText>성공</EditButtonText>
          </EditButton>
        </ButtonWrapper>
      )}
    </TodoDetailView>
  );
};

export default TodoDetail;
