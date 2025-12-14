export const layout = {
  screenPaddingHorizontal: 24,
  screenPaddingVertical: 24,
  getStarted: {
    // Figma: Content top=59 (frame top), iPhone safe-area top ~44 → 59-44 = 15
    headerOffsetFromSafeAreaTop: 15,
    headerMaxWidth: 300,
    // Figma: button top=667, height=56, frameHeight=812 => bottom from frame=89
    // iPhone safe-area bottom ~34 => bottom from safe-area content = 89-34 = 55
    primaryButtonBottomFromSafeAreaBottom: 55,
  },
} as const;
