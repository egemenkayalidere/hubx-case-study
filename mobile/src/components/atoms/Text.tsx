import type { PropsWithChildren } from 'react';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '@/theme/colors';

type AppTextProps = PropsWithChildren<{
  testID?: string;
}>;

const Root = styled(RNText)`
  color: ${colors.textPrimary};
  font-family: Rubik_400Regular;
`;

export function AppText({ children, testID }: AppTextProps) {
  return <Root testID={testID}>{children}</Root>;
}
