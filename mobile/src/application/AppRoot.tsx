import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from '@/api/queryClient';
import { RootNavigator } from '@/navigation/RootNavigator';
import { useAppFonts } from '@/application/useAppFonts';
import { useAppStore } from '@/store/useAppStore';

export function AppRoot() {
  const [loaded] = useAppFonts();
  const hasHydrated = useAppStore((s) => s.hasHydrated);

  if (!loaded || !hasHydrated) return null;

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
          <StatusBar style="dark" backgroundColor="transparent" translucent />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
