import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';
import ArrowRightIcon from '../../assets/svgs/ArrowRightIcon';
import PauseIcon from '../../assets/svgs/PauseIcon';
import RestartIcon from '../../assets/svgs/RestartIcon';

const TodayEffortTimer = styled.View`
  margin-top: 24px;
  align-items: flex-end;
`;

const TimerText = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: ${COLORS.textWhite};
`;

const TimerButtonWrapper = styled.View`
  margin-top: 18px;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
`;

const TimerTouchWrapper = styled(TouchableOpacity)`
  padding: 12px 24px;
`;
const ArrowTouchWrapper = styled(TouchableOpacity)`
  padding: 6px 18px;
`;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timeId, setTimeId] = useState(null);

  const handleStart = useCallback(() => {
    if (!timeId) {
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimeId(id);
    }
  }, [timeId]);

  const handleReset = useCallback(() => {
    setTime(0);
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
      <TimerText>{formatTime(time)}</TimerText>
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
