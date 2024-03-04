import React from 'react';
import styled from 'styled-components';
import TodayEffort from '@components/Home/TodayEffort';
import COLORS from '@constants/colors';
import Header from '@components/@common/Header';
import TodoList from '@components/Home/TodoList';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TodoCalendar from '../utils/TodoCalendar';

const HomeView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const Home = () => {
  const navigation = useNavigation();
  return (
    <HomeView>
      <ScrollView>
        <Header arrow={false} volume={false} search={true} moreVert={true} />
        <TodayEffort />
        <TodoList />
        <TodoCalendar />
      </ScrollView>
    </HomeView>
  );
};

export default Home;
