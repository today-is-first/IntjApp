import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import Picker from '../../utils/Picker';

const EditTimeView = styled.View`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 24px;
  padding: 18px 30px;
  border-radius: 24px;
  border-top-color: rgba(1, 0, 254, 0.5);
  border-left-color: rgba(1, 0, 254, 0.5);
  border-bottom-color: rgba(1, 0, 254, 1);
  border-right-color: rgba(1, 0, 254, 1);
  border-width: ${(props) => (props.page.length > 1 ? '0px' : '1px')};
  justify-content: center;
`;
const EditTopView = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const PickerView = styled.View``;
const SubmitButton = styled(TouchableOpacity)`
  padding: 8px 16px;
  border-radius: 12px;
  text-align: center;
  background-color: ${COLORS.pointColor};
`;
const SubmitText = styled.Text`
  color: ${COLORS.textWhite};
`;

const EditText = styled.Text`
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 1 ? COLORS.grayText : COLORS.pointColor};
  font-weight: 700;
  margin-bottom: 16px;
`;

const EditTime = ({ setPage, page, time }) => {
  return (
    <EditTimeView page={page}>
      <EditTopView>
        <EditText page={page}>시간</EditText>
        <SubmitButton onPress={() => setPage((state) => [...state, 'type'])}>
          <SubmitText>설정</SubmitText>
        </SubmitButton>
      </EditTopView>
      <PickerView>
        <Picker prevTime={time} />
      </PickerView>
    </EditTimeView>
  );
};

export default EditTime;
