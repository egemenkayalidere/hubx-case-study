import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { GetStartedHero } from '@/features/get-started/components/GetStartedHero';
import { GetStartedLegal } from '@/features/get-started/components/GetStartedLegal';
import { GetStartedTexts } from '@/features/get-started/components/GetStartedTexts';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const Content = styled.View`
  padding-left: ${layout.screenPaddingHorizontal}px;
  padding-right: ${layout.screenPaddingHorizontal}px;
`;

const Bottom = styled.View<{ $bottom: number }>`
  position: absolute;
  left: ${layout.screenPaddingHorizontal}px;
  right: ${layout.screenPaddingHorizontal}px;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
`;

const Legal = styled.View<{ $bottom: number }>`
  position: absolute;
  width: ${layout.getStarted.legalWidth}px;
  height: ${layout.getStarted.legalHeight}px;
  align-self: center;
  bottom: ${({ $bottom }: { $bottom: number }) => $bottom}px;
`;

export function GetStartedScreen({ navigation }: Props) {
  const { width: deviceWidth } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const scale = deviceWidth / layout.getStarted.baseWidth;

  const legalBottom = insets.bottom + layout.getStarted.legalBottomFromSafeAreaBottom;
  const buttonBottom = insets.bottom + layout.getStarted.primaryButtonBottomFromSafeAreaBottom;
  const heroTop = Math.max(
    0,
    insets.top + (layout.getStarted.heroTopFromFrame - layout.getStarted.baseSafeAreaTop) * scale,
  );
  const heroHeight = layout.getStarted.heroHeight * scale;

  return (
    <Screen testID="get-started-screen" paddingHorizontal={0} paddingVertical={0} edges={['top']}>
      <GetStartedHero top={heroTop} width={deviceWidth} height={heroHeight} />
      <Content>
        <GetStartedTexts />
      </Content>
      <Bottom $bottom={buttonBottom}>
        <Button variant="primary" fullWidth onPress={() => navigation.navigate('Onboarding')}>
          Get Started
        </Button>
      </Bottom>
      <Legal $bottom={legalBottom}>
        <GetStartedLegal />
      </Legal>
    </Screen>
  );
}
