import type { PropsWithChildren } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
}>;

const Root = styled(Pressable)`
  padding: 12px 16px;
`;

export function Button({ children, onPress, testID }: ButtonProps) {
  return (
    <Root onPress={onPress} testID={testID}>
      <AppText>{children}</AppText>
    </Root>
  );
}
