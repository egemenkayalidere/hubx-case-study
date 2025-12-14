import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';

type Props = {
  title: string;
  subtitle?: string;
  idLabel?: string;
  testID?: string;
};

export function PlaceholderScreen({
  title,
  subtitle = 'Placeholder ekran',
  idLabel,
  testID,
}: Props) {
  return (
    <Screen testID={testID}>
      <ScreenHeader title={title} subtitle={subtitle} />
      {idLabel ? <AppText style={{ marginTop: 12, opacity: 0.7 }}>{idLabel}</AppText> : null}
    </Screen>
  );
}
