import { Image } from 'react-native';
import styled from 'styled-components/native';

const TITLE_SOURCE = require('../../../../assets/onboarding/onboarding-slide-1-title.png');

type WrapperProps = {
  $top: number;
  $left: number;
  $width: number;
  $height: number;
  $debug: boolean;
};

const Wrapper = styled.View<WrapperProps>`
  position: absolute;
  top: ${({ $top }: { $top: number }) => $top}px;
  left: ${({ $left }: { $left: number }) => $left}px;
  width: ${({ $width }: { $width: number }) => $width}px;
  height: ${({ $height }: { $height: number }) => $height}px;
  border-width: ${({ $debug }: { $debug: boolean }) => ($debug ? 1 : 0)}px;
  border-color: rgba(255, 0, 0, 0.9);
`;

const TitleImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

type OnboardingSlide1TitleProps = {
  top: number;
  left: number;
  width: number;
  height: number;
  testID?: string;
  debug?: boolean;
};

export function OnboardingSlide1Title({
  top,
  left,
  width,
  height,
  testID,
  debug = false,
}: OnboardingSlide1TitleProps) {
  const resolved = Image.resolveAssetSource(TITLE_SOURCE);
  const srcW = resolved?.width ?? width;
  const srcH = resolved?.height ?? height;
  const scale = Math.min(width / srcW, height / srcH);
  const renderedW = srcW * scale;
  const translateX = -Math.max(0, (width - renderedW) / 2);

  return (
    <Wrapper testID={testID} $top={top} $left={left} $width={width} $height={height} $debug={debug}>
      <TitleImg
        resizeMode="contain"
        source={TITLE_SOURCE}
        style={{ transform: [{ translateX }] }}
      />
    </Wrapper>
  );
}
