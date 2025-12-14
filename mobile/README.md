# Mobile (Expo / React Native)

## Tech Stack

- Expo SDK 52
- React Native `0.76.x`, React `18`
- TypeScript
- Styled-components (atomic/molecular yaklaşımı)
- Zustand (+ persist) for app-state
- TanStack Query for server-state
- React Navigation (Native Stack)

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
npm run ios
```

## Quality

```bash
npm run format
npm run lint
npm run typecheck
```

## Mimari

```
src/
  api/            # endpoints + http + queries + dto types
  application/    # AppRoot + fonts + global providers
  components/     # atoms / molecules / organisms / templates
  features/       # feature-based modüller
  navigation/     # RootNavigator + types
  store/          # zustand store
  theme/          # layout/colors token'ları
  utils/          # layout scaling helpers
```

## Flow

- Get Started → Onboarding → Paywall
- Paywall Close: `hasOnboarded=true` + `reset(MainTabs)`
- MainTabs: Home / Diagnose / My Garden / Profile
- Scan: orta FAB ile kamera ekranı (sadece izin + preview)
