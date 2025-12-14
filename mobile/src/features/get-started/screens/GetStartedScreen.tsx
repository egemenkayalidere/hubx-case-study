import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import type { RootStackParamList } from '@/navigation/types';
import { GetStartedTexts } from '@/features/get-started/components/GetStartedTexts';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

export function GetStartedScreen({ navigation }: Props) {
  return (
    <Screen testID="get-started-screen" paddingVertical={0}>
      <GetStartedTexts />
      <Button onPress={() => navigation.navigate('Onboarding')}>Continue</Button>
    </Screen>
  );
}
