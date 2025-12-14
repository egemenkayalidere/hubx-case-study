import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import { BottomTabBar, type TabKey } from '@/components/organisms/BottomTabBar';
import { DiagnoseScreen } from '@/features/diagnose/screens/DiagnoseScreen';
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { MyGardenScreen } from '@/features/my-garden/screens/MyGardenScreen';
import { ProfileScreen } from '@/features/profile/screens/ProfileScreen';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export function MainTabsScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const onPressTab = useCallback(
    (tab: TabKey) => {
      if (tab === 'scan') {
        navigation.navigate('Scan');
        return;
      }
      setActiveTab(tab);
    },
    [navigation],
  );

  return (
    <View style={{ flex: 1 }}>
      {activeTab === 'home' ? <HomeScreen /> : null}
      {activeTab === 'diagnose' ? <DiagnoseScreen /> : null}
      {activeTab === 'garden' ? <MyGardenScreen /> : null}
      {activeTab === 'profile' ? <ProfileScreen /> : null}
      <BottomTabBar activeTab={activeTab} onPressTab={onPressTab} />
    </View>
  );
}
