import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';

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
  flex-direction: row;
  margin-top: 12px;
`;

const TimerTouchWrapper = styled(TouchableOpacity)`
  padding: 12px 24px;
`;
const TimerButtonText = React.memo(styled.Text`
  color: ${COLORS.textWhite};
`);

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
          <TimerButtonText>돌아가!</TimerButtonText>
        </TimerTouchWrapper>
        <TimerTouchWrapper onPress={handleStop}>
          <TimerButtonText>멈춰!</TimerButtonText>
        </TimerTouchWrapper>
        <TimerTouchWrapper onPress={handleStart}>
          <TimerButtonText>진행시켜!</TimerButtonText>
        </TimerTouchWrapper>
      </TimerButtonWrapper>
    </TodayEffortTimer>
  );
};

export default Timer;
