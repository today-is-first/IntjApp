import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateTimePicker from '@mohalla-tech/react-native-date-time-picker';
import COLORS from '../constants/colors';
import useTodoListStore from '../store/TodoListStore';

const PickerView = styled.View``;

const Picker = ({ prevTime }) => {
  const setEditTime = useTodoListStore((state) => state.setEditTime);
  const initTime = prevTime
    ? new Date(prevTime)
    : new Date(new Date().setMinutes(0));
  const onTimeChange = (selectedTime) => {
    setEditTime(selectedTime.getTime());
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
