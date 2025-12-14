import type { PropsWithChildren } from 'react';
import type { Edge } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { layout } from '@/theme/layout';

type ScreenProps = PropsWithChildren<{
  testID?: string;
  edges?: Edge[];
  paddingHorizontal?: number;
  paddingVertical?: number;
}>;

const Container = styled(SafeAreaView)<{ $ph: number; $pv: number }>`
  flex: 1;
  padding: ${({ $pv, $ph }: { $pv: number; $ph: number }) => `${$pv}px ${$ph}px`};
`;

export function Screen({
  children,
  testID,
  edges = ['top', 'bottom'],
  paddingHorizontal = layout.screenPaddingHorizontal,
  paddingVertical = layout.screenPaddingVertical,
}: ScreenProps) {
  return (
    <Container testID={testID} edges={edges} $ph={paddingHorizontal} $pv={paddingVertical}>
      {children}
    </Container>
  );
}
