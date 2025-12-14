import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useRef, useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { OnboardingBackground } from '@/features/onboarding/components/OnboardingBackground';
import { OnboardingDots } from '@/features/onboarding/components/OnboardingDots';
import { OnboardingSlide1Content } from '@/features/onboarding/components/OnboardingSlide1Content';
import { OnboardingSlide1Title } from '@/features/onboarding/components/OnboardingSlide1Title';
import { OnboardingSlide2Layers } from '@/features/onboarding/components/OnboardingSlide2Layers';
import { OnboardingSlide2Title } from '@/features/onboarding/components/OnboardingSlide2Title';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';
import { scalePx } from '@/utils/layout/scale';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

type Slide = {
  key: string;
};

const SlidesWrapper = styled.View`
  flex: 1;
`;

const SlidePage = styled.View<{ $width: number }>`
  width: ${({ $width }: { $width: number }) => $width}px;
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
  const { scaleW, scaleH } = useResponsiveScale(layout.design.baseWidth, layout.design.baseHeight);
  const insets = useSafeAreaInsets();

  const mediaScale = Math.max(scaleW, scaleH);

  const buttonBottom = insets.bottom + layout.getStarted.primaryButtonBottomFromSafeAreaBottom;
  const dotsBottom = insets.bottom + layout.onboarding.dotsBottomFromSafeAreaBottom;

  const titleTop = scalePx(
    layout.onboarding.titleTopFromFrame - layout.design.baseSafeAreaTop,
    scaleW,
  );
  const titleLeft = layout.screenPaddingHorizontal;

  const slide1TitleTop = titleTop;
  const slide1TitleLeft = titleLeft;
  const slide1TitleWidth = scalePx(layout.onboarding.slide1.titleWidth, scaleW);
  const slide1TitleHeight = scalePx(layout.onboarding.slide1.titleHeight, scaleW);

  const slide2TitleTop = titleTop;
  const slide2TitleLeft = titleLeft;
  const slide2TitleWidth = scalePx(layout.onboarding.slide2.titleWidth, scaleW);
  const slide2TitleHeight = scalePx(layout.onboarding.slide2.titleHeight, scaleW);

  const slide2Artwork = {
    top: scalePx(
      layout.onboarding.slide2.artwork.topFromFrame - layout.design.baseSafeAreaTop,
      mediaScale,
    ),
    left: scalePx(layout.onboarding.slide2.artwork.left, mediaScale),
    width: scalePx(layout.onboarding.slide2.artwork.width, mediaScale),
    height: scalePx(layout.onboarding.slide2.artwork.height, mediaScale),
    rotationDeg: layout.onboarding.slide2.artwork.rotationDeg,
  };
  const slide2Phone = {
    top: scalePx(
      layout.onboarding.slide2.phone.topFromFrame - layout.design.baseSafeAreaTop,
      mediaScale,
    ),
    left: scalePx(layout.onboarding.slide2.phone.left, mediaScale),
    width: scalePx(layout.onboarding.slide2.phone.width, mediaScale),
    height: scalePx(layout.onboarding.slide2.phone.height, mediaScale),
    rotationDeg: layout.onboarding.slide2.phone.rotationDeg,
  };
  const slide2Overlay = {
    top: scalePx(
      layout.onboarding.slide2.overlay.topFromFrame - layout.design.baseSafeAreaTop,
      mediaScale,
    ),
    left: 0,
    width: scalePx(layout.onboarding.slide2.overlay.width, mediaScale),
    height: scalePx(layout.onboarding.slide2.overlay.height, mediaScale),
    rotationDeg: layout.onboarding.slide2.overlay.rotationDeg,
  };
  const slide2Object = {
    top: scalePx(
      layout.onboarding.slide2.object.topFromFrame - layout.design.baseSafeAreaTop,
      mediaScale,
    ),
    left: scalePx(layout.onboarding.slide2.object.left, mediaScale),
    width: scalePx(layout.onboarding.slide2.object.width, mediaScale),
    height: scalePx(layout.onboarding.slide2.object.height, mediaScale),
    rotationDeg: layout.onboarding.slide2.object.rotationDeg,
  };

  const slide1ContentTop = scalePx(
    layout.onboarding.slide1.contentTopFromFrame -
      layout.design.baseSafeAreaTop +
      layout.onboarding.slide1.contentTopFineTune,
    mediaScale,
  );
  const slide1ContentWidth = scalePx(layout.design.baseWidth, mediaScale);
  const slide1ContentHeight = scalePx(layout.onboarding.slide1.contentHeight, mediaScale);

  const slides = useMemo<Slide[]>(() => [{ key: '1' }, { key: '2' }], []);

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
      <OnboardingBackground slideIndex={index} />
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
              {item.key === '1' ? (
                <OnboardingSlide1Content
                  testID="onboarding-slide-1-content"
                  top={slide1ContentTop}
                  width={slide1ContentWidth}
                  height={slide1ContentHeight}
                />
              ) : null}
              {item.key === '1' ? (
                <OnboardingSlide1Title
                  testID="onboarding-slide-1-title"
                  top={slide1TitleTop}
                  left={slide1TitleLeft}
                  width={slide1TitleWidth}
                  height={slide1TitleHeight}
                />
              ) : null}
              {item.key === '2' ? (
                <OnboardingSlide2Title
                  testID="onboarding-slide-2-title"
                  top={slide2TitleTop}
                  left={slide2TitleLeft}
                  width={slide2TitleWidth}
                  height={slide2TitleHeight}
                />
              ) : null}
              {item.key === '2' ? (
                <OnboardingSlide2Layers
                  artwork={slide2Artwork}
                  phone={slide2Phone}
                  overlay={slide2Overlay}
                  object={slide2Object}
                  deviceWidth={width}
                />
              ) : null}
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
