import type { PropsWithChildren } from 'react';
import type { TextProps } from 'react-native';
import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '@/theme/colors';

type AppTextProps = PropsWithChildren<TextProps>;

const Root = styled(RNText)`
  color: ${colors.textPrimary};
  font-family: 'Rubik_400Regular';
`;

export function AppText({ children, ...props }: AppTextProps) {
  return <Root {...props}>{children}</Root>;
}
