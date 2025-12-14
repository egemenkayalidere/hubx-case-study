import { FlatList, Image, Pressable, View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

export type HomeCategoryItem = {
  id: string;
  title: string;
  imageUrl?: string;
};

type Props = {
  items: HomeCategoryItem[];
  onPressItem?: (item: HomeCategoryItem) => void;
};

const Wrapper = styled.View`
  margin-top: ${layout.home.categoryGrid.topGapFromGetStarted}px;
  padding: 0 ${layout.screenPaddingHorizontal}px;
`;

const Grid = styled(FlatList as unknown as new () => FlatList<HomeCategoryItem>).attrs({
  numColumns: 2,
  scrollEnabled: false,
})``;

const Card = styled(Pressable)`
  width: ${layout.home.categoryGrid.cardWidth}px;
  height: ${layout.home.categoryGrid.cardHeight}px;
  border-radius: ${layout.home.categoryGrid.cardRadius}px;
  background-color: ${layout.home.categoryGrid.cardBg};
  border-width: ${layout.home.categoryGrid.cardBorderWidth}px;
  border-color: ${layout.home.categoryGrid.cardBorderColor};
  overflow: hidden;
`;

const Title = styled(AppText)`
  position: absolute;
  left: 16px;
  top: 16px;
  width: 92px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #13231b;
`;

const CategoryImage = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 76px;
`;

const SpacerRow = styled.View`
  height: ${layout.home.categoryGrid.rowGap}px;
`;

export function HomeCategoryGridSection({ items, onPressItem }: Props) {
  return (
    <Wrapper testID="home-category-grid">
      <Grid
        data={items}
        keyExtractor={(it: HomeCategoryItem) => it.id}
        columnWrapperStyle={{
          columnGap: layout.home.categoryGrid.columnGap,
        }}
        ItemSeparatorComponent={() => <SpacerRow />}
        renderItem={({ item, index }: { item: HomeCategoryItem; index: number }) => (
          <View>
            <Card onPress={() => onPressItem?.(item)}>
              <Title>{item.title}</Title>
              {item.imageUrl ? (
                <CategoryImage source={{ uri: item.imageUrl }} resizeMode="contain" />
              ) : (
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 76,
                    backgroundColor: 'rgba(19, 35, 27, 0.06)',
                  }}
                />
              )}
            </Card>
          </View>
        )}
      />
    </Wrapper>
  );
}
