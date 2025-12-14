import { View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  padding: ${layout.home.header.greetingTopFromSafeAreaTop}px ${layout.screenPaddingHorizontal}px
    0px;
`;

const Greeting = styled(AppText)`
  width: 107px;
  height: ${layout.home.header.greetingHeight}px;
  font-family: 'Rubik_400Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.07px;
  color: ${layout.home.header.titleColor};
`;

const TitleRow = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(AppText)`
  width: 225px;
  height: ${layout.home.header.titleHeight}px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.35px;
  color: ${layout.home.header.titleColor};
`;

const Search = styled.View`
  margin-top: 10px;
  height: ${layout.home.header.searchHeight}px;
  border-radius: 12px;
  background-color: #ffffff;
  border-width: ${layout.home.header.searchBorderWidth}px;
  border-color: ${layout.home.header.searchBorderColor};
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
        <Title>Good Afternoon! ⛅️</Title>
      </TitleRow>
      <Search>
        <SearchIcon />
        <SearchPlaceholder>Search for plants</SearchPlaceholder>
        <View style={{ flex: 1 }} />
      </Search>
    </Wrapper>
  );
}
