import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';
import { useAppStore } from '@/store/useAppStore';

type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

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
  color: #000000;
`;

const Footer = styled.View`
  margin-top: 16px;
`;

export function PaywallScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const setHasOnboarded = useAppStore((s) => s.setHasOnboarded);

  const onClose = () => {
    setHasOnboarded(true);
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  return (
    <Screen testID="paywall-screen">
      <CloseButton testID="paywall-close" $top={insets.top} onPress={onClose}>
        <CloseText>×</CloseText>
      </CloseButton>
      <ScreenHeader title="Paywall" subtitle="Placeholder ekran (tasarım yok)" />
      <Footer>
        <Button onPress={onClose}>Continue</Button>
      </Footer>
    </Screen>
  );
}
