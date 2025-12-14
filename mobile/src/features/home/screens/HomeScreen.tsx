import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Screen } from '@/components/atoms/Screen';
import { BottomTabBar, type TabKey } from '@/components/organisms/BottomTabBar';
import {
  HomeCategoryGridSection,
  type HomeCategoryItem,
} from '@/features/home/components/HomeCategoryGridSection';
import {
  HomeGetStartedSection,
  type GetStartedItem,
} from '@/features/home/components/HomeGetStartedSection';
import { HomeHeader } from '@/features/home/components/HomeHeader';
import { HomePremiumBox } from '@/features/home/components/HomePremiumBox';
import type { RootStackParamList } from '@/navigation/types';
import { layout } from '@/theme/layout';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Content = styled.View`
  flex: 1;
  background-color: #fbfafa;
`;

const GET_STARTED_ITEMS: GetStartedItem[] = [
  { id: 'how-to-identify', title: 'How to identify plants easily with PlantApp?' },
  { id: 'species', title: 'Species and are the differ' },
];

const CATEGORY_ITEMS: HomeCategoryItem[] = [
  { id: 'edible', title: 'Edible\nPlants' },
  { id: 'ferns', title: 'Ferns' },
  { id: 'cacti', title: 'Cacti and\nSucculents' },
  { id: 'palms', title: 'Palms' },
];

export function HomeScreen(_props: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const insets = useSafeAreaInsets();

  return (
    <Screen testID="home-screen" edges={['top']} paddingVertical={0} paddingHorizontal={0}>
      <Content style={{ paddingBottom: layout.tabBar.baseHeight + insets.bottom }}>
        <HomeHeader />
        <HomePremiumBox />
        <HomeGetStartedSection title="Get Started" items={GET_STARTED_ITEMS} />
        <HomeCategoryGridSection items={CATEGORY_ITEMS} />
      </Content>
      <BottomTabBar activeTab={activeTab} onPressTab={setActiveTab} />
    </Screen>
  );
}
