import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '@constants/colors';
import GenerateIcon from '@svg/footer/GenerateIcon';
import HomeIcon from '@svg/footer/HomeIcon';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterView = styled.View`
  padding: 4px 0;
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
  font-family: 'Lora';
  color: ${(props) =>
    props.selectedPage === props.page ? COLORS.textWhite : COLORS.grayText};
  margin-top: 2px;
`;

const Footer = () => {
  const navigation = useNavigation();
  const [selectedPage, setSelectedPage] = useState('Home');
  return (
    <FooterView>
      <IconWrapper>
        <IconTouch
          onPress={() => {
            navigation.navigate('Home');
            setSelectedPage('Home');
          }}
        >
          <HomeIcon
            width="24px"
            height="24px"
            fill={selectedPage === 'Home' ? COLORS.textWhite : COLORS.grayText}
          />
          <IconText selectedPage={selectedPage} page="Home">
            home
          </IconText>
        </IconTouch>
        <IconTouch
          onPress={() => {
            navigation.navigate('Generate');
            setSelectedPage('Generate');
          }}
        >
          <GenerateIcon
            width="24px"
            height="24px"
            fill={
              selectedPage === 'Generate' ? COLORS.textWhite : COLORS.grayText
            }
          />
          <IconText selectedPage={selectedPage} page="Generate">
            generate
          </IconText>
        </IconTouch>
      </IconWrapper>
    </FooterView>
  );
};

export default Footer;
