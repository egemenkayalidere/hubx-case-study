import { Image } from 'react-native';
import styled from 'styled-components/native';

type HeroWrapperProps = {
  $top: number;
  $height: number;
};

const HeroWrapper = styled.View<HeroWrapperProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ $top }: { $top: number }) => $top}px;
  height: ${({ $height }: { $height: number }) => $height}px;
  align-items: center;
`;

type HeroImageProps = {
  $width: number;
  $height: number;
};

const HeroImage = styled(Image)<HeroImageProps>`
  width: ${({ $width }: { $width: number }) => $width}px;
  height: ${({ $height }: { $height: number }) => $height}px;
`;

type GetStartedHeroProps = {
  top: number;
  width: number;
  height: number;
};

export function GetStartedHero({ top, width, height }: GetStartedHeroProps) {
  return (
    <HeroWrapper testID="get-started-hero" $top={top} $height={height}>
      <HeroImage
        resizeMode="contain"
        source={require('../../../../assets/get-started/get-started-hero.png')}
        $width={width}
        $height={height}
      />
    </HeroWrapper>
  );
}
