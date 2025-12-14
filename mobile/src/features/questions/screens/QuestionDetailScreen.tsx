import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PlaceholderScreen } from '@/components/templates/PlaceholderScreen';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'QuestionDetail'>;

export function QuestionDetailScreen({ route }: Props) {
  const { id, title } = route.params;

  return (
    <PlaceholderScreen
      testID="question-detail-screen"
      title={title ?? 'Question Detail'}
      subtitle="Placeholder detay ekranı"
      idLabel={`id: ${id}`}
    />
  );
}
