export const layout = {
  screenPaddingHorizontal: 24,
  screenPaddingVertical: 24,
  getStarted: {
    // Figma: Content top=59 (frame top), iPhone safe-area top ~44 → 59-44 = 15
    headerOffsetFromSafeAreaTop: 15,
    headerMaxWidth: 300,
  },
} as const;
