import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';

export function ProfileScreen() {
  return (
    <Screen testID="profile-screen">
      <ScreenHeader title="Profile" subtitle="Placeholder ekran" />
    </Screen>
  );
}
