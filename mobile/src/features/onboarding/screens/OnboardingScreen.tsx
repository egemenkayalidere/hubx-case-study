import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useRef, useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';
import { OnboardingDots } from '@/features/onboarding/components/OnboardingDots';
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
  padding-left: ${layout.screenPaddingHorizontal}px;
  padding-right: ${layout.screenPaddingHorizontal}px;
`;

const SlideCard = styled.View`
  flex: 1;
  padding-top: 64px;
`;

const SlideTitle = styled(AppText)`
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
`;

const SlideBody = styled(AppText)`
  color: #666;
`;

const BottomButton = styled.View<{ $bottom: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  right: ${layout.screenPaddingHorizontal}px;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
`;

const BottomDots = styled.View<{ $bottom: number }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
  align-items: center;
`;

export function OnboardingScreen({ navigation }: Props) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const buttonBottom = insets.bottom + layout.getStarted.primaryButtonBottomFromSafeAreaBottom;
  const dotsBottom = insets.bottom + 16;

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
    const next = index + 1;
    if (next >= slides.length) {
      navigation.navigate('Paywall');
      return;
    }
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  };

  return (
    <Screen testID="onboarding-screen" paddingHorizontal={0} paddingVertical={0} edges={['top']}>
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
            <SlidePage $width={width}>
              <SlideCard>
                <SlideTitle>{item.title}</SlideTitle>
                <SlideBody>{item.body}</SlideBody>
              </SlideCard>
            </SlidePage>
          )}
        />
      </SlidesWrapper>

      <BottomButton $bottom={buttonBottom}>
        <Button variant="primary" fullWidth onPress={goNext}>
          Continue
        </Button>
      </BottomButton>

      <BottomDots $bottom={dotsBottom}>
        <OnboardingDots testID="onboarding-dots" count={3} activeIndex={index} />
      </BottomDots>
    </Screen>
  );
}
