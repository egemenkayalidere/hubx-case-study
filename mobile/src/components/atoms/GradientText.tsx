import type { ReactNode } from 'react';
import { Text } from 'react-native';
import type { TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

type Props = {
  children: ReactNode;
  colors: readonly [string, string, ...string[]];
  style?: TextStyle;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

export function GradientText({
  children,
  colors,
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}: Props) {
  return (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: 'transparent', color: '#000000' }]}>
          {children}
        </Text>
      }
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
