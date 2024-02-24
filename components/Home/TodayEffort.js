import React from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import Timer from './Timer';

const TodayEffortView = styled.View`
  margin: 0 18px;
  padding: 18px 30px;
  border-radius: 24px;
  background-color: ${COLORS.bottomSheetBackGround};
  justify-content: center;
`;

const TodayEffortTopView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const TodayEffortTitle = styled.Text`
  color: ${COLORS.textWhite};
  font-size: 20px;
  font-weight: 700;
`;

const TodayDate = styled.Text`
  color: ${COLORS.textWhite};
  font-size: 16px;
`;

const TodayEffort = () => {
  return (
    <TodayEffortView>
      <TodayEffortTopView>
        <TodayEffortTitle>오늘의 노력</TodayEffortTitle>
        <TodayDate>
          {new Date().toISOString().slice(5, 10).split('-').join('월 ')}일
        </TodayDate>
      </TodayEffortTopView>
      <Timer />
    </TodayEffortView>
  );
};

export default TodayEffort;
