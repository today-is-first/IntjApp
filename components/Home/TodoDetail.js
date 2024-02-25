import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TodoDetailView = styled.View`
  margin-top: 16px;
  border-top-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.pointColor};
  border-top-width: 1px;
`;
const ContentView = styled.View`
  margin-top: 12px;
`;
const ContentText = styled.Text`
  color: ${(props) => (props.isSuccess ? COLORS.grayText : COLORS.pointColor)};
`;
const TodoContent = styled.Text`
  align-self: center;
  color: ${(props) => (props.isSuccess ? COLORS.grayText : COLORS.pointColor)};
  text-align: center;
  margin-top: 12px;
  max-width: 210px;
`;

const EditButton = styled(TouchableOpacity)`
  margin-top: 24px;
  padding: 8px 18px;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isSuccess ? COLORS.grayText : COLORS.pointColor};
  align-self: flex-end;
`;

const EditButtonText = styled.Text`
  color: ${COLORS.textWhite};
  text-align: center;
  font-size: 12px;
  font-weight: 800;
`;

const TodoDetail = ({ id, content, isSuccess }) => {
  const navigation = useNavigation();
  return (
    <TodoDetailView isSuccess={isSuccess}>
      <ContentView>
        <ContentText isSuccess={isSuccess}>
          {isSuccess ? '해낸 것' : '해낼 것'}
        </ContentText>
        <TodoContent isSuccess={isSuccess}>{content}</TodoContent>
      </ContentView>
      {isSuccess ? (
        ''
      ) : (
        <EditButton onPress={() => navigation.navigate('Edit')}>
          <EditButtonText>수정</EditButtonText>
        </EditButton>
      )}
    </TodoDetailView>
  );
};

export default TodoDetail;
