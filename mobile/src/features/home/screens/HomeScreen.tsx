import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { useCategoriesQuery, useQuestionsQuery } from '@/api/queries';
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

const StatusBarFill = styled.View<{ $h: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${({ $h }: { $h: number }) => `${$h}px`};
  background-color: #ffffff;
`;

const FALLBACK_GET_STARTED_ITEMS: GetStartedItem[] = [
  {
    id: 'how-to-identify',
    title: 'How to identify plants easily with',
    emphasizeText: 'PlantApp?',
  },
  { id: 'species', title: 'Differences Between Species and Varieties?' },
];

export function HomeScreen(_props: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const insets = useSafeAreaInsets();
  const categoriesQuery = useCategoriesQuery();
  const questionsQuery = useQuestionsQuery();

  const getStartedItems: GetStartedItem[] =
    questionsQuery.data?.map((q) => ({ id: String(q.id), title: q.title })) ??
    FALLBACK_GET_STARTED_ITEMS;

  const categoryItems: HomeCategoryItem[] =
    categoriesQuery.data?.map((c) => ({
      id: String(c.id),
      title: c.title,
      imageUrl: c.image?.url,
    })) ?? [];

  return (
    <Screen testID="home-screen" edges={['top']} paddingVertical={0} paddingHorizontal={0}>
      <StatusBarFill $h={insets.top} pointerEvents="none" />
      <Content style={{ paddingBottom: layout.tabBar.baseHeight + insets.bottom }}>
        <HomeHeader />
        <HomePremiumBox />
        <HomeGetStartedSection title="Get Started" items={getStartedItems} />
        <HomeCategoryGridSection items={categoryItems} />
      </Content>
      <BottomTabBar activeTab={activeTab} onPressTab={setActiveTab} />
    </Screen>
  );
}
