import { Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';
import { layout } from '@/theme/layout';
import { scaleFromSafeAreaTop } from '@/utils/layout/scale';

const HEADER_BG = require('../../../../assets/home/header-Background.png');
const SEARCH_ICON = require('../../../../assets/home/search-Icon.png');

const Wrapper = styled.View<{ $h: number }>`
  position: relative;
  height: ${({ $h }: { $h: number }) => `${$h}px`};
`;

const HeaderBg = styled(Image)<{ $w: number; $h: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ $w }: { $w: number }) => `${$w}px`};
  height: ${({ $h }: { $h: number }) => `${$h}px`};
`;

const Greeting = styled(AppText)<{ $top: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  top: ${({ $top }: { $top: number }) => `${$top}px`};
  width: 107px;
  height: ${layout.home.header.greetingHeight}px;
  font-family: 'Rubik_400Regular';
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.07px;
  color: ${layout.home.header.titleColor};
`;

const Title = styled(AppText)<{ $top: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  top: ${({ $top }: { $top: number }) => `${$top}px`};
  width: 225px;
  height: ${layout.home.header.titleHeight}px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.35px;
  color: ${layout.home.header.titleColor};
`;

const Search = styled.View<{ $top: number; $w: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  top: ${({ $top }: { $top: number }) => `${$top}px`};
  width: ${({ $w }: { $w: number }) => `${$w}px`};
  height: ${layout.home.header.searchHeight}px;
  border-radius: 12px;
  background-color: #ffffff;
  border-width: ${layout.home.header.searchBorderWidth}px;
  border-color: ${layout.home.header.searchBorderColor};
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

const SearchIcon = styled(Image)`
  width: 18px;
  height: 18px;
`;

const SearchPlaceholder = styled(AppText)`
  margin-left: 14px;
  font-family: 'Rubik_400Regular';
  font-weight: 400;
  font-size: 15.5px;
  line-height: 15.5px;
  letter-spacing: 0.07px;
  color: #afafaf;
`;

export function HomeHeader() {
  const insets = useSafeAreaInsets();
  const { deviceWidth, scaleW } = useResponsiveScale(
    layout.design.baseWidth,
    layout.design.baseHeight,
  );

  const greetingTop = scaleFromSafeAreaTop({
    frameTop: layout.home.header.greetingTopFromFrame,
    insetsTop: insets.top,
    baseSafeAreaTop: layout.design.baseSafeAreaTop,
    scale: scaleW,
  });

  const titleTop = scaleFromSafeAreaTop({
    frameTop: layout.home.header.titleTopFromFrame,
    insetsTop: insets.top,
    baseSafeAreaTop: layout.design.baseSafeAreaTop,
    scale: scaleW,
  });

  const searchTop = scaleFromSafeAreaTop({
    frameTop: layout.home.header.searchTopFromFrame,
    insetsTop: insets.top,
    baseSafeAreaTop: layout.design.baseSafeAreaTop,
    scale: scaleW,
  });

  const searchWidth = Math.max(0, deviceWidth - layout.screenPaddingHorizontal * 2);
  const headerHeight = layout.home.header.frameHeight * scaleW;

  return (
    <Wrapper testID="home-header" $h={headerHeight}>
      <HeaderBg
        source={HEADER_BG}
        resizeMode="stretch"
        $w={deviceWidth}
        $h={headerHeight}
        pointerEvents="none"
      />
      <Greeting $top={greetingTop}>Hi, plant lover!</Greeting>
      <Title $top={titleTop}>Good Afternoon! ⛅️</Title>
      <Search $top={searchTop} $w={searchWidth}>
        <SearchIcon source={SEARCH_ICON} resizeMode="contain" />
        <SearchPlaceholder>Search for plants</SearchPlaceholder>
        <View style={{ flex: 1 }} />
      </Search>
    </Wrapper>
  );
}
