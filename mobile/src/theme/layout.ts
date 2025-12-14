export const layout = {
  design: {
    baseWidth: 375,
    baseHeight: 812,
    baseSafeAreaTop: 44,
  },
  screenPaddingHorizontal: 24,
  screenPaddingVertical: 24,
  onboarding: {
    titleOffsetFromSafeAreaTop: 12,
    dotsBottomFromSafeAreaBottom: 16,
    slide1: {
      titleLeft: 24,
      titleWidth: 315,
      titleHeight: 66,
      contentTopFromFrame: 137,
      contentHeight: 700,
      contentTopFineTune: -24,
    },
  },
  getStarted: {
    headerOffsetFromSafeAreaTop: 12,
    headerMaxWidth: 300,
    primaryButtonBottomFromSafeAreaBottom: 55,
    legalBottomFromSafeAreaBottom: 8,
    legalWidth: 232,
    legalHeight: 30,
    buttonToLegalGap: 17,
    heroTopFromFrame: 168,
    heroWidth: 375,
    heroHeight: 499,
  },
} as const;
