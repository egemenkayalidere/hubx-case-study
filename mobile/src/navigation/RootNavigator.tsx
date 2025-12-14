import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetStartedScreen } from '@/features/get-started/screens/GetStartedScreen';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { OnboardingScreen } from '@/features/onboarding/screens/OnboardingScreen';
import { PaywallScreen } from '@/features/paywall/screens/PaywallScreen';
import type { RootStackParamList } from '@/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
