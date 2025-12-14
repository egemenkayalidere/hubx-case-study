import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@/navigation/RootNavigator';
import { useAppFonts } from '@/app/useAppFonts';

export function AppRoot() {
  const [loaded] = useAppFonts();

  // Fontlar yüklenmeden render edersek iOS'ta layout değişimleri (fout) yaşanıyor.
  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
