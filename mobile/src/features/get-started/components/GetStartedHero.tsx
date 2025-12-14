import { Image } from 'react-native';
import styled from 'styled-components/native';

import { layout } from '@/theme/layout';

const HeroWrapper = styled.View<{ $top: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ $top }: { $top: number }) => $top}px;
  height: ${layout.getStarted.heroHeight}px;
  align-items: center;
`;

const HeroImage = styled(Image)`
  width: ${layout.getStarted.heroWidth}px;
  height: ${layout.getStarted.heroHeight}px;
`;

export function GetStartedHero({ top }: { top: number }) {
  return (
    <HeroWrapper testID="get-started-hero" $top={top}>
      <HeroImage
        resizeMode="contain"
        source={require('../../../../assets/get-started/get-started-hero.png')}
      />
    </HeroWrapper>
  );
}
