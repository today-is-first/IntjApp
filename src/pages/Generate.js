import { useRef } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import Preview from '@components/Generate/Preview';
import { captureRef } from 'react-native-view-shot';
import { TouchableOpacity } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

const GenerateView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const GenerateButton = styled(TouchableOpacity)``;
const ButtonText = styled.Text`
  color: ${COLORS.textWhite};
  font-family: 'Lora';
  font-size: 20px;
`;

const Generate = () => {
  const viewRef = useRef();
  const onCapture = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 0.8,
      });
      const savedUri = await CameraRoll.save(uri, 'photo');
      console.log('Capture URI', uri);
      console.log(savedUri);
    } catch (err) {
      console.error('Capture failed', err);
    }
  };
  return (
    <GenerateView>
      <Preview ref={viewRef} />
      <GenerateButton onPress={onCapture}>
        <ButtonText>generate?</ButtonText>
      </GenerateButton>
    </GenerateView>
  );
};

export default Generate;
