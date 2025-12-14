import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useRef, useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

type Slide = {
  key: string;
  title: string;
  body: string;
};

const SlidesWrapper = styled.View`
  flex: 1;
`;

const SlidePage = styled.View<{ $width: number }>`
  width: ${({ $width }: { $width: number }) => $width}px;
`;

const SlideCard = styled.View`
  flex: 1;
  padding: 16px;
  justify-content: center;
`;

const SlideTitle = styled(AppText)`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SlideBody = styled(AppText)`
  color: #666;
`;

const Footer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  gap: 12px;
`;

export function OnboardingScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const slides = useMemo<Slide[]>(
    () => [
      { key: '1', title: 'Onboarding 1', body: 'Placeholder slide 1' },
      { key: '2', title: 'Onboarding 2', body: 'Placeholder slide 2' },
    ],
    [],
  );

  const listRef = useRef<FlatList<Slide>>(null);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    const next = Math.min(index + 1, slides.length - 1);
    if (next === index) {
      navigation.navigate('Paywall');
      return;
    }
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  };

  const skip = () => navigation.navigate('Paywall');

  return (
    <Screen testID="onboarding-screen">
      <ScreenHeader title="Onboarding" subtitle="2 slide (horizontal) - placeholder" />

      <SlidesWrapper>
        <FlatList
          ref={listRef}
          data={slides}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const width = e.nativeEvent.layoutMeasurement.width || 1;
            const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
            setIndex(newIndex);
          }}
          renderItem={({ item }) => (
            <SlidePage $width={width - 48}>
              <SlideCard>
                <SlideTitle>{item.title}</SlideTitle>
                <SlideBody>{item.body}</SlideBody>
              </SlideCard>
            </SlidePage>
          )}
        />
      </SlidesWrapper>

      <Footer>
        <Button onPress={skip}>Skip</Button>
        <Button onPress={goNext}>{index === slides.length - 1 ? 'Continue' : 'Next'}</Button>
      </Footer>
    </Screen>
  );
}
