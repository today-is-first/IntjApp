import React from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import GenerateIcon from '@svg/footer/GenerateIcon';
import HomeIcon from '@svg/footer/HomeIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterView = styled.View`
  position: absolute;
  background-color: ${COLORS.mainBackGround};
  bottom: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 64px;
  border-top-width: 1px;
  border-top-color: ${COLORS.iconGray};
`;

const IconWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  gap: 24px;
`;

const IconTouch = styled(TouchableOpacity)`
  padding: 18px 24px;
  align-items: center;
`;

const IconText = styled.Text`
  color: ${COLORS.textWhite};
  margin-top: 2px;
`;

const Footer = () => {
  const navigation = useNavigation();
  return (
    <FooterView>
      <IconWrapper>
        <IconTouch onPress={() => navigation.navigate('Home')}>
          <HomeIcon width="24px" height="24px" fill={COLORS.textWhite} />
          <IconText>home</IconText>
        </IconTouch>
        <IconTouch onPress={() => navigation.navigate('Generate')}>
          <GenerateIcon width="24px" height="24px" fill={COLORS.textWhite} />
          <IconText>generate</IconText>
        </IconTouch>
      </IconWrapper>
    </FooterView>
  );
};

export default Footer;
