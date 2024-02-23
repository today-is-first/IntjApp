import React from 'react';
import styled from 'styled-components';
import TodayEffort from '../components/Home/TodayEffort';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';

const HomeView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const Home = () => {
  return (
    <HomeView>
      <Header arrow={false} volume={false} search={true} moreVert={true} />
      <TodayEffort />
    </HomeView>
  );
};

export default Home;
