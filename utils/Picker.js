import React, { useState } from 'react';
import styled from 'styled-components';
import DateTimePicker from '@mohalla-tech/react-native-date-time-picker';
import COLORS from '../constants/colors';

const PickerView = styled.View``;

const Picker = () => {
  const initialDate = new Date();
  const [time, setTime] = useState(initialDate);

  const onTimeChange = (selectedTime) => setTime(selectedTime);

  return (
    <PickerView>
      <DateTimePicker
        mode="time"
        initialValue={initialDate}
        onChange={onTimeChange}
        is24Hour={true}
        minuteInterval={10}
        separatorColor={COLORS.whiteGray}
        listItemStyle={{ fontSize: 16, fontWeight: 700500 }}
      />
    </PickerView>
  );
};

export default Picker;
