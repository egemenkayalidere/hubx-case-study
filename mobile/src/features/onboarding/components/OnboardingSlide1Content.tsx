import { Image } from 'react-native';
import styled from 'styled-components/native';

type WrapperProps = {
  $top: number;
  $height: number;
};

const Wrapper = styled.View<WrapperProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${({ $top }: { $top: number }) => $top}px;
  height: ${({ $height }: { $height: number }) => $height}px;
  align-items: center;
`;

type ImgProps = {
  $width: number;
  $height: number;
};

const Img = styled(Image)<ImgProps>`
  width: ${({ $width }: { $width: number }) => $width}px;
  height: ${({ $height }: { $height: number }) => $height}px;
`;

type OnboardingSlide1ContentProps = {
  top: number;
  width: number;
  height: number;
  testID?: string;
};

export function OnboardingSlide1Content({
  top,
  width,
  height,
  testID,
}: OnboardingSlide1ContentProps) {
  return (
    <Wrapper testID={testID} $top={top} $height={height}>
      <Img
        resizeMode="contain"
        $width={width}
        $height={height}
        source={require('../../../../assets/onboarding/Content.png')}
      />
    </Wrapper>
  );
}
