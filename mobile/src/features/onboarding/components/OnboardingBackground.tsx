import { Image } from 'react-native';
import styled from 'styled-components/native';

const Bg = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

type OnboardingBackgroundProps = {
  slideIndex: number;
};

export function OnboardingBackground({ slideIndex }: OnboardingBackgroundProps) {
  const source =
    slideIndex === 1
      ? require('../../../../assets/onboarding/onboarding-slide-2-bg.png')
      : require('../../../../assets/onboarding/onboarding-slide-1-bg.png');

  return <Bg testID="onboarding-background" resizeMode="stretch" source={source} />;
}
