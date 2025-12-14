import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ScreenProps = PropsWithChildren<{
  testID?: string;
}>;

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export function Screen({ children, testID }: ScreenProps) {
  return <Container testID={testID}>{children}</Container>;
}
