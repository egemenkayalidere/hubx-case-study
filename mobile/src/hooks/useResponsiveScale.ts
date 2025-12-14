import { useWindowDimensions } from 'react-native';

type UseResponsiveScaleResult = {
  deviceWidth: number;
  deviceHeight: number;
  scale: number;
  scaleW: number;
  scaleH: number;
};

export function useResponsiveScale(
  baseWidth: number,
  baseHeight?: number,
): UseResponsiveScaleResult {
  const { width, height } = useWindowDimensions();
  const scaleW = width / baseWidth;
  const scaleH = baseHeight ? height / baseHeight : 1;
  return { deviceWidth: width, deviceHeight: height, scale: scaleW, scaleW, scaleH };
}
