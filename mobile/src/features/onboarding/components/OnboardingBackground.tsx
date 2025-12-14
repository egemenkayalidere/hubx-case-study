import { Image } from 'react-native';
import styled from 'styled-components/native';

const Bg = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export function OnboardingBackground() {
  return (
    <Bg
      testID="onboarding-background"
      resizeMode="stretch"
      source={require('../../../../assets/onboarding/Background.png')}
    />
  );
}
