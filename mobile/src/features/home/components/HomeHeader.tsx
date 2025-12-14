import { View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  padding: 16px ${layout.screenPaddingHorizontal}px 0px;
`;

const Greeting = styled(AppText)`
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.72);
`;

const TitleRow = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(AppText)`
  font-family: 'Rubik_700Bold';
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  color: #13231b;
`;

const TitleIcon = styled.View`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border-radius: 11px;
  background-color: rgba(19, 35, 27, 0.08);
`;

const Search = styled.View`
  margin-top: 14px;
  height: 48px;
  border-radius: 12px;
  background-color: rgba(19, 35, 27, 0.06);
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
`;

const SearchIcon = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: rgba(19, 35, 27, 0.18);
`;

const SearchPlaceholder = styled(AppText)`
  margin-left: 10px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(19, 35, 27, 0.38);
`;

export function HomeHeader() {
  return (
    <Wrapper testID="home-header">
      <Greeting>Hi, plant lover!</Greeting>
      <TitleRow>
        <Title>Good Afternoon!</Title>
        <TitleIcon />
      </TitleRow>
      <Search>
        <SearchIcon />
        <SearchPlaceholder>Search for plants</SearchPlaceholder>
        <View style={{ flex: 1 }} />
      </Search>
    </Wrapper>
  );
}
