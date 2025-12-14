import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoryDetailScreen } from '@/features/categories/screens/CategoryDetailScreen';
import { GetStartedScreen } from '@/features/get-started/screens/GetStartedScreen';
import { OnboardingScreen } from '@/features/onboarding/screens/OnboardingScreen';
import { PaywallScreen } from '@/features/paywall/screens/PaywallScreen';
import { QuestionDetailScreen } from '@/features/questions/screens/QuestionDetailScreen';
import { ScanScreen } from '@/features/scan/screens/ScanScreen';
import { MainTabsScreen } from '@/features/tabs/screens/MainTabsScreen';
import type { RootStackParamList } from '@/navigation/types';
import { useAppStore } from '@/store/useAppStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);

  return (
    <Stack.Navigator
      key={hasOnboarded ? 'home' : 'onboarding'}
      initialRouteName={hasOnboarded ? 'MainTabs' : 'GetStarted'}
      screenOptions={{
        headerShown: false,
      }}
    >
      {hasOnboarded ? null : (
        <>
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Paywall" component={PaywallScreen} />
        </>
      )}
      <Stack.Screen name="MainTabs" component={MainTabsScreen} />
      <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ presentation: 'fullScreenModal' }}
      />
    </Stack.Navigator>
  );
}
