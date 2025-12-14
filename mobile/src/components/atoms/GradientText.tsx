import type { ReactNode } from 'react';
import { Text } from 'react-native';
import type { TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  children: ReactNode;
  colors: readonly [string, string, ...string[]];
  style?: TextStyle;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

function getMaskedView(): any | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require('@react-native-masked-view/masked-view');
    return mod?.default ?? mod;
  } catch {
    return null;
  }
}

export function GradientText({
  children,
  colors,
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
}: Props) {
  const MaskedView = getMaskedView();

  if (!MaskedView) {
    return <Text style={[style, { color: colors[colors.length - 1] }]}>{children}</Text>;
  }

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
