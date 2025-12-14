import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen(_props: Props) {
  return (
    <Screen testID="home-screen">
      <ScreenHeader title="Home" subtitle="Placeholder ekran (tasarım yok)" />
    </Screen>
  );
}
