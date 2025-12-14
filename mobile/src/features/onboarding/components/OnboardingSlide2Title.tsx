import { Image } from 'react-native';
import styled from 'styled-components/native';

type WrapperProps = {
  $top: number;
  $left: number;
  $width: number;
  $height: number;
};

const Wrapper = styled.View<WrapperProps>`
  position: absolute;
  top: ${({ $top }: { $top: number }) => $top}px;
  left: ${({ $left }: { $left: number }) => $left}px;
  width: ${({ $width }: { $width: number }) => $width}px;
  height: ${({ $height }: { $height: number }) => $height}px;
`;

const TitleImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

type OnboardingSlide2TitleProps = {
  top: number;
  left: number;
  width: number;
  height: number;
  testID?: string;
};

export function OnboardingSlide2Title({
  top,
  left,
  width,
  height,
  testID,
}: OnboardingSlide2TitleProps) {
  return (
    <Wrapper testID={testID} $top={top} $left={left} $width={width} $height={height}>
      <TitleImg
        resizeMode="contain"
        source={require('../../../../assets/onboarding/onboarding-slide-2-title.png')}
      />
    </Wrapper>
  );
}
