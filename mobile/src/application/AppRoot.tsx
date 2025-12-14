import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@/navigation/RootNavigator';
import { useAppFonts } from '@/application/useAppFonts';
import { useAppStore } from '@/store/useAppStore';

export function AppRoot() {
  const [loaded] = useAppFonts();
  const hasHydrated = useAppStore((s) => s.hasHydrated);

  if (!loaded || !hasHydrated) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
