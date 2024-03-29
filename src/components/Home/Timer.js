import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import { TouchableOpacity } from 'react-native';
import ArrowRightIcon from '@svg/timer/ArrowRightIcon';
import PauseIcon from '@svg/timer/PauseIcon';
import RestartIcon from '@svg/timer/RestartIcon';
import useTodoTimerStore from '@store/TodoTimer';

const TodayEffortTimer = styled.View`
  margin-top: 18px;
  align-items: flex-end;
`;

const TimerText = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: ${COLORS.textWhite};
`;

const TimerButtonWrapper = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

const TimerTouchWrapper = styled(TouchableOpacity)`
  padding: 12px 24px 6px;
`;
const ArrowTouchWrapper = styled(TouchableOpacity)`
  padding: 6px 18px 0px;
`;

const Timer = () => {
  const [timeId, setTimeId] = useState(null);
  const [effortTime, setEffortTime, increaseEffortTime] = useTodoTimerStore(
    (state) => [
      state.effortTime,
      state.setEffortTime,
      state.increaseEffortTime,
    ],
  );
  const handleStart = useCallback(() => {
    if (!timeId) {
      const id = setInterval(() => {
        increaseEffortTime();
      }, 1000);
      setTimeId(id);
    }
  }, [timeId]);

  const handleReset = useCallback(() => {
    setEffortTime(0);
    if (timeId) {
      clearInterval(timeId);
    }
    setTimeId(null);
  }, [timeId]);

  const handleStop = useCallback(() => {
    if (timeId) {
      clearInterval(timeId);
      setTimeId(null);
    }
  }, [timeId]);

  const formatTime = useCallback((totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }, []);

  return (
    <TodayEffortTimer>
      <TimerText>{formatTime(effortTime)}</TimerText>
      <TimerButtonWrapper>
        <TimerTouchWrapper onPress={handleReset}>
          <RestartIcon width="30px" height="30px" fill={COLORS.iconWhite} />
        </TimerTouchWrapper>
        <TimerTouchWrapper onPress={handleStop}>
          <PauseIcon width="30px" height="30px" fill={COLORS.iconWhite} />
        </TimerTouchWrapper>
        <ArrowTouchWrapper onPress={handleStart}>
          <ArrowRightIcon width="42px" height="42px" fill={COLORS.iconWhite} />
        </ArrowTouchWrapper>
      </TimerButtonWrapper>
    </TodayEffortTimer>
  );
};

export default Timer;
