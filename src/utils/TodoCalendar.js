import React, { useState } from 'react';
import styled from 'styled-components';
import { Calendar } from 'react-native-calendars';
import COLORS from '@constants/colors';
import useTodoListStore from '@store/TodoListStore';

const CalendarView = styled.View`
  margin: 0 18px;
  border-left-color: rgba(160, 160, 160, 0.2);
  border-top-color: rgba(160, 160, 160, 0.2);
  border-right-color: rgba(60, 60, 60, 0.2);
  border-bottom-color: rgba(60, 60, 60, 0.2);
  border-width: 2px;
  border-radius: 12px;
`;

const TodoCalendar = () => {
  const [selectedDate, setSelectedDate] = useTodoListStore((state) => [
    state.selectedDate,
    state.setSelectedDate,
  ]);
  const [selected, setSelected] = useState(selectedDate);
  return (
    <CalendarView>
      <Calendar
        style={{}}
        theme={{
          textDayFontFamily: 'Lora',
          textMonthFontFamily: 'Lora',
          textDayHeaderFontFamily: 'Lora',
          textMonthFontSize: 20,
          backgroundColor: COLORS.bottomSheetBackGround,
          calendarBackground: COLORS.bottomSheetBackGround,
          todayTextColor: COLORS.pointColor,
          dayTextColor: COLORS.textWhite,
          monthTextColor: COLORS.textWhite,
          textDisabledColor: COLORS.grayText,
          selectedDayBackgroundColor: COLORS.textWhite,
          selectedDayTextColor: COLORS.mainBackGround,
          arrowColor: COLORS.textWhite,
          selectedDotColor: COLORS.mainBackGround,
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selected]: {
            marked: true,
            selected: true,
            disableTouchEvent: false,
          },
        }}
        disableMonthChange={true}
        enableSwipeMonths={false}
        showSixWeeks={true}
      />
    </CalendarView>
  );
};

export default TodoCalendar;
