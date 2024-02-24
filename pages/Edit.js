import React from 'react';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';
import EditTitle from '../components/Edit/EditTitle';

const EditPageView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const EditView = styled.View``;

const Edit = () => {
  return (
    <EditPageView>
      <Header arrow={true} moreVert={true} />
      <EditView>
        <EditTitle />
      </EditView>
    </EditPageView>
  );
};

export default Edit;
