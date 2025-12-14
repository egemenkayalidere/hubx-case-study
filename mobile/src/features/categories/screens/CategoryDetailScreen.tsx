import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PlaceholderScreen } from '@/components/templates/PlaceholderScreen';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryDetail'>;

export function CategoryDetailScreen({ route }: Props) {
  const { id, title } = route.params;

  return (
    <PlaceholderScreen
      testID="category-detail-screen"
      title={title ?? 'Category Detail'}
      subtitle="Placeholder detay ekranı"
      idLabel={`id: ${id}`}
    />
  );
}
