import type { PropsWithChildren } from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

type ButtonVariant = 'ghost' | 'primary';

type ButtonProps = PropsWithChildren<{
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}>;

const Root = styled(Pressable)<{ $variant: ButtonVariant; $fullWidth: boolean }>`
  width: ${({ $fullWidth }: { $fullWidth: boolean }) => ($fullWidth ? '100%' : 'auto')};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ $variant }: { $variant: ButtonVariant }) =>
    $variant === 'primary'
      ? `
    height: 56px;
    border-radius: 12px;
    background-color: #28AF6E;
    padding: 18px 16px;
    gap: 8px;
  `
      : `padding: 12px 16px;`}
`;

const Label = styled(AppText)<{ $variant: ButtonVariant }>`
  ${({ $variant }: { $variant: ButtonVariant }) =>
    $variant === 'primary'
      ? `
    width: 85px;
    height: 24px;
    color: #ffffff;
    font-family: 'SF Pro Text';
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.24px;
    text-align: center;
  `
      : ``}
`;

export function Button({
  children,
  onPress,
  testID,
  variant = 'ghost',
  fullWidth = false,
}: ButtonProps) {
  return (
    <Root onPress={onPress} testID={testID} $variant={variant} $fullWidth={fullWidth}>
      <Label $variant={variant}>{children}</Label>
    </Root>
  );
}
