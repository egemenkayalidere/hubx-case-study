# HubX React Native Case

Bu repo, HubX React Native Developer case çalışması için geliştirilmiş Expo (SDK 52) tabanlı mobil uygulamayı içerir.

## Proje

- **Mobile app**: `mobile/`

## Kurulum

```bash
cd mobile
npm install
```

## Çalıştırma

```bash
cd mobile
npm run ios
```

## Script'ler

```bash
cd mobile
npm run lint
npm run typecheck
npm run format
```

## Akış (Flow)

- **Onboarding flow**: Get Started → Onboarding (2 slide) → Paywall
- **Home flow**: MainTabs (Home + placeholder tab'ler)

Onboarding tamamlandıktan sonra (Paywall close) `hasOnboarded=true` persisted olarak kaydedilir ve kullanıcı bu flow'a tekrar sokulmaz.
