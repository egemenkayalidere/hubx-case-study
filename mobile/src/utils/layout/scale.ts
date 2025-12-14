export function scalePx(px: number, scale: number) {
  return px * scale;
}

export function scaleFromSafeAreaTop(params: {
  frameTop: number;
  insetsTop: number;
  baseSafeAreaTop: number;
  scale: number;
}) {
  const { frameTop, insetsTop, baseSafeAreaTop, scale } = params;
  return Math.max(0, insetsTop + (frameTop - baseSafeAreaTop) * scale);
}
