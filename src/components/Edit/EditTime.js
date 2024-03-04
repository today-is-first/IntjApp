import React, { useState } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import COLORS from '@constants/colors';
import Picker from '@utils/Picker';

const EditTimeView = styled.View`
  background-color: ${COLORS.textWhite};
  margin: 0px 24px 18px;
  padding: 18px 30px;
  border-radius: 8px;
  border-top-color: rgba(242, 242, 242, 1);
  border-left-color: rgba(242, 242, 242, 1);
  border-bottom-color: rgba(16, 16, 16, 1);
  border-right-color: rgba(16, 16, 16, 1);
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
  padding: 4px 16px;
  border-radius: 4px;
  text-align: center;
  border-bottom-width: 1px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const SubmitText = styled.Text`
  font-family: 'Lora';
  color: ${COLORS.mainBackGround};
`;

const EditText = styled.Text`
  font-family: 'Lora';
  font-size: 20px;
  color: ${(props) =>
    props.page.length > 1 ? COLORS.grayText : COLORS.mainBackGround};
  font-weight: 400;
  margin-bottom: 12px;
`;

const EditTime = ({ setPage, page, time }) => {
  const [save, setSave] = useState('Save?');
  return (
    <EditTimeView page={page}>
      <EditTopView>
        <EditText page={page}>Time</EditText>
        <SubmitButton
          onPress={() => {
            setPage((state) => [...state, 'type']);
            setSave('Save!');
          }}
        >
          <SubmitText>{save}</SubmitText>
        </SubmitButton>
      </EditTopView>
      <PickerView>
        <Picker prevTime={time} />
      </PickerView>
    </EditTimeView>
  );
};

export default EditTime;
