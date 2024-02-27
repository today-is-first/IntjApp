import React from 'react';
import styled from 'styled-components';
import TodayEffort from '../components/Home/TodayEffort';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';
import TodoList from '../components/Home/TodoList';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddIcon from '../assets/svgs/todoList/AddIcon';

const HomeView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const NewTodoButton = styled(TouchableOpacity)`
  position: absolute;
  padding: 6px;
  right: 24px;
  bottom: 60px;
  border-radius: 50px;
  background-color: ${COLORS.textWhite};
  border-width: 1px;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
`;

const Home = () => {
  const navigation = useNavigation();
  return (
    <HomeView>
      <ScrollView>
        <Header arrow={false} volume={false} search={true} moreVert={true} />
        <TodayEffort />
        <TodoList />
      </ScrollView>
      <NewTodoButton onPress={() => navigation.navigate('Edit')}>
        <AddIcon width="36px" height="36px" fill={COLORS.mainBackGround} />
      </NewTodoButton>
    </HomeView>
  );
};

export default Home;
