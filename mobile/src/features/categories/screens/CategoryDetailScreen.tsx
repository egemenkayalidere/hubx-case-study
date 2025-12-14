import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryDetail'>;

export function CategoryDetailScreen({ route }: Props) {
  const { id, title } = route.params;

  return (
    <Screen testID="category-detail-screen">
      <ScreenHeader title={title ?? 'Category Detail'} subtitle="Placeholder detay ekranı" />
      <AppText style={{ marginTop: 12, opacity: 0.7 }}>id: {id}</AppText>
    </Screen>
  );
}
