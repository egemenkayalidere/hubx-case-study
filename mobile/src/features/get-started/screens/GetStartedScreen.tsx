import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { GetStartedTexts } from '@/features/get-started/components/GetStartedTexts';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const Bottom = styled.View`
  position: absolute;
  width: 327px;
  align-self: center;
  bottom: ${layout.getStarted.primaryButtonBottomFromSafeAreaBottom}px;
`;

export function GetStartedScreen({ navigation }: Props) {
  return (
    <Screen testID="get-started-screen" paddingVertical={0}>
      <GetStartedTexts />
      <Bottom>
        <Button variant="primary" fullWidth onPress={() => navigation.navigate('Onboarding')}>
          Get Started
        </Button>
      </Bottom>
    </Screen>
  );
}
