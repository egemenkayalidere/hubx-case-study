import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStartedScreen } from '@/features/get-started/screens/GetStartedScreen';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { OnboardingScreen } from '@/features/onboarding/screens/OnboardingScreen';
import { PaywallScreen } from '@/features/paywall/screens/PaywallScreen';
import type { RootStackParamList } from '@/navigation/types';
import { useAppStore } from '@/store/useAppStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);

  return (
    <Stack.Navigator
      key={hasOnboarded ? 'home' : 'onboarding'}
      initialRouteName={hasOnboarded ? 'Home' : 'GetStarted'}
      screenOptions={{
        headerShown: false,
      }}
    >
      {hasOnboarded ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Paywall" component={PaywallScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
