import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';

const EditPageView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const EditView = styled.View``;
const EditTitleView = styled.View``;
const EditTitle = styled.Text`
  font-size: 30px;
  color: ${COLORS.textWhite};
`;

const Edit = () => {
  return (
    <EditPageView>
      <Header arrow={true} moreVert={true} />
      <EditView>
        <EditTitleView>
          <EditTitle>타이틀이야</EditTitle>
        </EditTitleView>
      </EditView>
    </EditPageView>
  );
};

export default Edit;
