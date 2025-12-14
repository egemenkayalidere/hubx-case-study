import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { AppText } from '@/components/atoms/Text';
import { Screen } from '@/components/atoms/Screen';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';
import { useAppStore } from '@/store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const TopImagePlaceholder = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 520px;
  background-color: #0c1913;
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

export function PaywallScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const setHasOnboarded = useAppStore((s) => s.setHasOnboarded);

  const onClose = () => {
    setHasOnboarded(true);
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  const bottomCtaBottom = insets.bottom + 12;

  return (
    <Screen testID="paywall-screen" paddingHorizontal={0} paddingVertical={0} edges={['top']}>
      <TopImagePlaceholder />
      <BottomFill />
      <CloseButton testID="paywall-close" $top={insets.top} onPress={onClose}>
        <CloseText>×</CloseText>
      </CloseButton>

      <BottomCta $bottom={bottomCtaBottom}>
        <Button variant="primary" fullWidth onPress={onClose}>
          Try free for 3 days
        </Button>
        <AppText
          style={{
            marginTop: 10,
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
            marginTop: 8,
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
