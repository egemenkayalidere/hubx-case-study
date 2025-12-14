import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';

export function MyGardenScreen() {
  return (
    <Screen testID="my-garden-screen">
      <ScreenHeader title="My Garden" subtitle="Placeholder ekran" />
    </Screen>
  );
}
