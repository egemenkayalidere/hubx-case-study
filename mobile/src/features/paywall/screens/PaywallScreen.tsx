import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { ScreenHeader } from '@/components/molecules/ScreenHeader';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const Footer = styled.View`
  margin-top: 16px;
`;

export function PaywallScreen({ navigation }: Props) {
  return (
    <Screen testID="paywall-screen">
      <ScreenHeader title="Paywall" subtitle="Placeholder ekran (tasarım yok)" />
      <Footer>
        <Button onPress={() => navigation.replace('Home')}>Continue</Button>
      </Footer>
    </Screen>
  );
}
