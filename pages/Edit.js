import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../constants/colors';
import Header from '../components/@common/Header';
import EditTitle from '../components/Edit/EditTitle';
import EditTime from '../components/Edit/EditTime';
import EditType from '../components/Edit/EditType';
import EditContent from '../components/Edit/EditContent';

const EditPageView = styled.View`
  background-color: ${COLORS.mainBackGround};
  flex: 1;
`;

const EditView = styled.View``;

const Edit = () => {
  const [page, setPage] = useState([]);
  return (
    <EditPageView>
      <Header arrow={true} moreVert={true} />
      <EditView>
        {page.includes('content') ? (
          <EditContent setPage={setPage} page={page} />
        ) : (
          ''
        )}
        {page.includes('type') ? (
          <EditType setPage={setPage} page={page} />
        ) : (
          ''
        )}
        {page.includes('time') ? (
          <EditTime setPage={setPage} page={page} />
        ) : (
          ''
        )}
        <EditTitle setPage={setPage} page={page} />
      </EditView>
    </EditPageView>
  );
};

export default Edit;
