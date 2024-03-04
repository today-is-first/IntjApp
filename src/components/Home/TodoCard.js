import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import { TouchableOpacity } from 'react-native';
import FoodIcon from '@svg/todoList/FoodIcon';
import SportIcon from '@svg/todoList/SportIcon';
import StudyIcon from '@svg/todoList/StudyIcon';
import TodoDetail from '@components/Home/TodoDetail';

const TodoCardView = styled(TouchableOpacity)`
  background-color: ${COLORS.textWhite};
  margin: 8px 6px 0px;
  padding: 16px 24px;
  border-radius: 8px;
`;

const PreviewWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: 'center';
`;

const CardLeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const TodoCardTime = React.memo(styled.Text`
  color: ${(props) => (props.isSuccess ? COLORS.grayText : COLORS.pointColor)};
  font-size: 14px;
  font-weight: 400;
`);

const TodoCardText = React.memo(styled.Text`
  color: ${(props) => (props.isSuccess ? COLORS.grayText : COLORS.pointColor)};
  font-size: 16px;
  font-weight: 600;
`);

const icons = {
  공부: StudyIcon,
  운동: SportIcon,
  밥: FoodIcon,
};

const IconSwitcher = ({ type, isSuccess }) => {
  const SelectedIcon = icons[type] || StudyIcon;
  return (
    <SelectedIcon
      width="16px"
      height="16px"
      fill={isSuccess ? COLORS.grayText : COLORS.pointColor}
    />
  );
};

const TodoCard = ({ id, title, time, type, content, isSuccess }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TodoCardView
      isSuccess={isSuccess}
      onPress={() => setIsPressed(!isPressed)}
    >
      <PreviewWrapper>
        <CardLeftWrapper>
          {IconSwitcher({ type, isSuccess: isSuccess })}
          <TodoCardTime isSuccess={isSuccess}>
            {new Date(parseInt(time)).toLocaleTimeString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hourCycle: 'h23',
            })}
          </TodoCardTime>
        </CardLeftWrapper>
        <TodoCardText isSuccess={isSuccess}>
          {title.length > 11 ? title.slice(0, 11) + '...' : title}
        </TodoCardText>
      </PreviewWrapper>
      {isPressed ? (
        <TodoDetail id={id} content={content} isSuccess={isSuccess} />
      ) : (
        ''
      )}
    </TodoCardView>
  );
};

export default TodoCard;
