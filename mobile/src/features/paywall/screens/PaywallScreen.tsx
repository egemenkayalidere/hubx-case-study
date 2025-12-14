import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import type { RootStackParamList } from '@/navigation/types';
import { useAppStore } from '@/store/useAppStore';
import { layout } from '@/theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const HERO_SOURCE = require('../../../../assets/paywall/paywall-hero.png');

const HeroWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 520px;
`;

const HeroImage = styled(Image)`
  height: 100%;
`;

const BottomFill = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 520px;
  background-color: #0f2a21;
`;

const CloseButton = styled(Pressable)<{ $top: number }>`
  position: absolute;
  top: ${({ $top }: { $top: number }) => $top}px;
  right: ${layout.screenPaddingHorizontal}px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

const CloseText = styled.Text`
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
`;

const BottomCta = styled.View<{ $bottom: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  right: ${layout.screenPaddingHorizontal}px;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
`;

const OptionsWrapper = styled.View<{ $bottom: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  right: ${layout.screenPaddingHorizontal}px;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
`;

const OptionsPlaceholder = styled.View`
  height: 220px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.06);
`;

export function PaywallScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { width: deviceWidth } = useWindowDimensions();
  const setHasOnboarded = useAppStore((s) => s.setHasOnboarded);

  const onClose = () => {
    setHasOnboarded(true);
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  const bottomCtaBottom = insets.bottom;
  const heroHeight = 520;
  const heroResolved = Image.resolveAssetSource(HERO_SOURCE);
  const heroSrcW = heroResolved?.width ?? deviceWidth;
  const heroSrcH = heroResolved?.height ?? heroHeight;
  const heroScale = Math.max(deviceWidth / heroSrcW, heroHeight / heroSrcH);
  const heroRenderedW = heroSrcW * heroScale;
  const heroTranslateX = -Math.max(0, (heroRenderedW - deviceWidth) / 2);
  const optionsGapFromButton = 26;
  const ctaButtonHeight = 56;
  const ctaButtonToDesc = 8;
  const ctaDescHeight = 24;
  const ctaDescToLinks = 10;
  const ctaLinksHeight = 15;
  const optionsBottom =
    bottomCtaBottom +
    ctaLinksHeight +
    ctaDescToLinks +
    ctaDescHeight +
    ctaButtonToDesc +
    ctaButtonHeight +
    optionsGapFromButton;

  return (
    <Screen testID="paywall-screen" paddingHorizontal={0} paddingVertical={0} edges={['top']}>
      <HeroWrapper>
        <HeroImage
          resizeMode="cover"
          source={HERO_SOURCE}
          style={{
            width: heroRenderedW,
            transform: [{ translateX: heroTranslateX }],
          }}
        />
      </HeroWrapper>
      <BottomFill />
      <CloseButton testID="paywall-close" $top={insets.top} onPress={onClose}>
        <CloseText>×</CloseText>
      </CloseButton>

      <OptionsWrapper $bottom={optionsBottom}>
        <OptionsPlaceholder />
      </OptionsWrapper>

      <BottomCta $bottom={bottomCtaBottom}>
        <Button
          variant="primary"
          fullWidth
          onPress={onClose}
          labelStyle={{
            width: 135,
            height: 24,
            fontFamily: 'Rubik_500Medium',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: -0.24,
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Try free for 3 days
        </Button>
        <AppText
          style={{
            marginTop: 8,
            fontSize: 9,
            lineHeight: 12,
            color: 'rgba(255,255,255,0.72)',
            textAlign: 'center',
          }}
        >
          After the 3-day free trial period you'll be charged $27.49 per year unless you cancel
          before the trial expires. Yearly Subscription is Auto-Renewable
        </AppText>
        <AppText
          style={{
            marginTop: 10,
            fontSize: 11,
            lineHeight: 15,
            color: 'rgba(255,255,255,0.72)',
            textAlign: 'center',
          }}
        >
          Terms · Privacy · Restore
        </AppText>
      </BottomCta>
    </Screen>
  );
}
