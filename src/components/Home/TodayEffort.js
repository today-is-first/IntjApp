import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import Timer from '@components/Home/Timer';

const TodayEffortView = styled.View`
  margin: 0 18px;
  background-color: ${COLORS.bottomSheetBackGround};
  justify-content: center;
  padding: 18px 30px;
  border-radius: 12px;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
  border-width: 2px;
`;

const TodayEffortTopView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const TodayEffortTitle = styled.Text`
  font-family: 'Lora';
  color: ${COLORS.textWhite};
  font-size: 20px;
  font-weight: 600;
`;

const TodayDate = styled.Text`
  font-family: 'Lora';
  color: ${COLORS.textWhite};
  font-size: 16px;
`;

function formatDate(date) {
  return `${date.toLocaleDateString('en-US', {
    weekday: 'short',
  })}, ${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
}

const TodayEffort = () => {
  return (
    <TodayEffortView>
      <TodayEffortTopView>
        <TodayEffortTitle>Today</TodayEffortTitle>
        <TodayDate>{formatDate(new Date())}</TodayDate>
      </TodayEffortTopView>
      <Timer />
    </TodayEffortView>
  );
};

export default TodayEffort;
