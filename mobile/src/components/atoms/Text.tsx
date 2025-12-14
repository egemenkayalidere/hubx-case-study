import type { PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

type AppTextProps = PropsWithChildren<{
  testID?: string;
}>;

const Root = styled(RNText)`
  color: #111;
`;

export function AppText({ children, testID }: AppTextProps) {
  return <Root testID={testID}>{children}</Root>;
}
