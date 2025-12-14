import { FlatList, Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

export type GetStartedItem = {
  id: string;
  title: string;
  emphasizeText?: string;
};

type Props = {
  title: string;
  items: GetStartedItem[];
  onPressItem?: (item: GetStartedItem) => void;
};

const Wrapper = styled.View`
  margin-top: ${layout.home.getStarted.topGapFromPremiumBox}px;
`;

const SectionTitle = styled(AppText)`
  padding: 0 ${layout.screenPaddingHorizontal}px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #13231b;
`;

const List = styled(FlatList as unknown as new () => FlatList<GetStartedItem>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 16px;
  height: ${layout.home.getStarted.listHeight}px;
`;

const Card = styled(Pressable)`
  width: 240px;
  height: 164px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #13231b;
`;

const CardImagePlaceholder = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.08);
`;

const CardTitleSlot = styled.View`
  position: absolute;
  left: 14px;
  top: 111px;
  width: 200px;
  height: 40px;
`;

const CardTitle = styled(Text)`
  font-family: 'Rubik_400Regular';
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #ffffff;
`;

const Spacer = styled.View`
  width: 12px;
`;

export function HomeGetStartedSection({ title, items, onPressItem }: Props) {
  return (
    <Wrapper testID="home-get-started">
      <SectionTitle>{title}</SectionTitle>
      <List
        data={items}
        keyExtractor={(it: GetStartedItem) => it.id}
        contentContainerStyle={{
          paddingHorizontal: layout.screenPaddingHorizontal,
        }}
        ItemSeparatorComponent={() => <Spacer />}
        renderItem={({ item }: { item: GetStartedItem }) => (
          <Card onPress={() => onPressItem?.(item)}>
            <CardImagePlaceholder />
            <CardTitleSlot>
              <CardTitle>
                {item.emphasizeText ? (
                  <>
                    {item.title}{' '}
                    <Text style={{ fontFamily: 'Rubik_500Medium', fontWeight: 500 }}>
                      {item.emphasizeText}
                    </Text>
                  </>
                ) : (
                  item.title
                )}
              </CardTitle>
            </CardTitleSlot>
          </Card>
        )}
        ListFooterComponent={() => <View style={{ width: layout.screenPaddingHorizontal }} />}
      />
    </Wrapper>
  );
}
