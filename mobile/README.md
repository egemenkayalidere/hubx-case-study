# Mobile (Expo / React Native)

## Tech Stack

- Expo SDK 52
- React Native `0.76.x`, React `18`
- TypeScript
- Styled-components (atomic/molecular yaklaşımı)
- Zustand (+ persist) for app-state
- TanStack Query for server-state
- React Navigation (Native Stack)

## Environment / Gereksinimler

- **Node.js**: LTS (öneri: 18.x veya 20.x)
- **npm**: Node ile gelir
- **iOS (macOS)**: Xcode + iOS Simulator

Opsiyonel:

- **Watchman**: Metro file-watcher uyarılarını azaltır.

## Kurulum

```bash
npm install
```

## Çalıştırma

```bash
npm run ios
```

Alternatif:

```bash
npm run start
```

## Quality

```bash
npm run format
npm run lint
npm run typecheck
```

## Test

```bash
npm test
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

## API

- **Categories**: `https://dummy-api-jtg6bessta-ey.a.run.app/getCategories`
- **Questions**: `https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions`

## Notlar

- Bu projede ekstra bir `.env` ihtiyacı yoktur (endpoint’ler `src/api/endpoints.ts` içinde sabit).
