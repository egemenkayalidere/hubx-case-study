import { useWindowDimensions } from 'react-native';

type UseResponsiveScaleResult = {
  deviceWidth: number;
  scale: number;
};

export function useResponsiveScale(baseWidth: number): UseResponsiveScaleResult {
  const { width } = useWindowDimensions();
  return { deviceWidth: width, scale: width / baseWidth };
}
