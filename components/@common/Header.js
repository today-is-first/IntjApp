import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '../../assets/svgs/ArrowLeftIcon';
import VolumeUpIcon from '../../assets/svgs/VolumeUpIcon';
import MoreVertIcon from '../../assets/svgs/MoreVertIcon';
import SearchIcon from '../../assets/svgs/SearchIcon';
import COLORS from '../../constants/colors';
import { TouchableOpacity } from 'react-native';

const HeaderView = styled.View`
  padding: 48px 12px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLeft = styled.View``;
const HeaderRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const IconTouchWrapper = styled(TouchableOpacity)`
  padding: 5px 10px;
`;
const HeaderBlank = styled.View``;

const Header = ({ arrow, volume, search, moreVert }) => {
  return (
    <HeaderView>
      <HeaderLeft>
        {arrow ? (
          <IconTouchWrapper>
            <ArrowLeftIcon width="30px" height="30px" fill={COLORS.iconWhite} />
          </IconTouchWrapper>
        ) : (
          <HeaderBlank />
        )}
      </HeaderLeft>
      <HeaderRight>
        {search ? (
          <IconTouchWrapper>
            <SearchIcon width="30px" height="30px" fill={COLORS.iconWhite} />
          </IconTouchWrapper>
        ) : (
          <HeaderBlank />
        )}
        {volume ? (
          <IconTouchWrapper>
            <VolumeUpIcon width="30px" height="30px" fill={COLORS.iconWhite} />
          </IconTouchWrapper>
        ) : (
          <HeaderBlank />
        )}
        {moreVert ? (
          <IconTouchWrapper>
            <MoreVertIcon width="30px" height="30px" fill={COLORS.iconWhite} />
          </IconTouchWrapper>
        ) : (
          <HeaderBlank />
        )}
      </HeaderRight>
    </HeaderView>
  );
};

export default Header;
