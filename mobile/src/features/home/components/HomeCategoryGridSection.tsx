import { FlatList, Image, Pressable, View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { useResponsiveScale } from '@/hooks/useResponsiveScale';
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
  margin-top: -10px;
  padding: 0 ${layout.screenPaddingHorizontal}px;
`;

const Grid = styled(FlatList as unknown as new () => FlatList<HomeCategoryItem>).attrs({
  numColumns: 2,
  scrollEnabled: false,
})``;

const Card = styled(Pressable)<{ $w: number }>`
  width: ${({ $w }: { $w: number }) => `${$w}px`};
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
  width: 110px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.32px;
  color: #13231b;
  z-index: 2;
`;

const CategoryImage = styled(Image)`
  position: absolute;
  left: 10px;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SpacerRow = styled.View`
  height: ${layout.home.categoryGrid.rowGap}px;
`;

export function HomeCategoryGridSection({ items, onPressItem }: Props) {
  const { deviceWidth } = useResponsiveScale(layout.design.baseWidth, layout.design.baseHeight);
  const cardWidth = Math.floor(
    (deviceWidth - layout.screenPaddingHorizontal * 2 - layout.home.categoryGrid.columnGap) / 2,
  );

  return (
    <Wrapper testID="home-category-grid">
      <Grid
        data={items}
        keyExtractor={(it: HomeCategoryItem) => it.id}
        ItemSeparatorComponent={() => <SpacerRow />}
        renderItem={({ item, index }: { item: HomeCategoryItem; index: number }) => (
          <View
            style={{
              marginRight: index % 2 === 0 ? layout.home.categoryGrid.columnGap : 0,
            }}
          >
            <Card $w={cardWidth} onPress={() => onPressItem?.(item)}>
              <Title numberOfLines={2}>{item.title}</Title>
              {item.imageUrl ? (
                <CategoryImage source={{ uri: item.imageUrl }} resizeMode="contain" />
              ) : (
                <View
                  style={{
                    position: 'absolute',
                    left: 10,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(19, 35, 27, 0.06)',
                    zIndex: 1,
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
