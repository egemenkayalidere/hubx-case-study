import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import styled from 'styled-components/native';

import { Screen } from '@/components/atoms/Screen';
import { BottomTabBar, type TabKey } from '@/components/organisms/BottomTabBar';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Content = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-bottom: ${layout.tabBar.height}px;
`;

export function HomeScreen(_props: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  return (
    <Screen testID="home-screen" edges={['top']} paddingVertical={0} paddingHorizontal={0}>
      <Content />
      <BottomTabBar activeTab={activeTab} onPressTab={setActiveTab} />
    </Screen>
  );
}
