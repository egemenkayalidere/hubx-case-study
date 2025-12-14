import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../features/welcome/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}


