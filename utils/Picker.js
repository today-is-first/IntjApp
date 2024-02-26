import React, { useState } from 'react';
import styled from 'styled-components';
import DateTimePicker from '@mohalla-tech/react-native-date-time-picker';
import COLORS from '../constants/colors';
import useTodoListStore from '../store/TodoListStore';

const PickerView = styled.View``;

const Picker = ({ prevTime }) => {
  const setEditTime = useTodoListStore((state) => state.setEditTime);
  const getInitialTimeDate = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
    return time;
  };
  const initTime = getInitialTimeDate(prevTime);
  const onTimeChange = (selectedTime) => {
    setEditTime(selectedTime.toString().slice(16, 21));
  };

  return (
    <PickerView>
      <DateTimePicker
        mode="time"
        initialValue={initTime}
        onChange={onTimeChange}
        is24Hour={true}
        minuteInterval={10}
        separatorColor={COLORS.whiteGray}
        listItemStyle={{ fontSize: 16, fontWeight: '400' }}
        containerStyle={{ paddingLeft: 16 }}
        itemHeight={40}
      />
    </PickerView>
  );
};

export default Picker;
