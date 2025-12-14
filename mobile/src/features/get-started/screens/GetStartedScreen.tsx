import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

export function GetStartedScreen({ navigation }: Props) {
  return (
    <Screen testID="get-started-screen">
      <ScreenHeader title="Get Started" subtitle="Placeholder ekran (tasarım yok)" />
      <Button onPress={() => navigation.navigate('Onboarding')}>Continue</Button>
    </Screen>
  );
}
