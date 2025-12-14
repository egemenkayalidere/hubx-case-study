import { Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

export type TabKey = 'home' | 'diagnose' | 'scan' | 'garden' | 'profile';

const HOME_ICON = require('../../../assets/home/Icon.png');

type Props = {
  activeTab: TabKey;
  onPressTab: (tab: TabKey) => void;
};

const Wrapper = styled.View<{ $pb: number }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${layout.tabBar.height}px;
  padding-bottom: ${({ $pb }: { $pb: number }) => `${$pb}px`};
  background-color: #ffffff;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${layout.screenPaddingHorizontal}px;
`;

const Item = styled(Pressable)<{ $active: boolean }>`
  width: 64px;
  height: 56px;
  align-items: center;
  justify-content: center;
  opacity: ${({ $active }: { $active: boolean }) => ($active ? 1 : 0.55)};
`;

const HomeItem = styled(Item)`
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 6px;
`;

const HomeIcon = styled(Image)`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
`;

const IconPlaceholder = styled.View`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
  border-radius: 12px;
  background-color: rgba(40, 175, 110, 0.2);
`;

const Label = styled(AppText)<{ $active: boolean }>`
  margin-top: 4px;
  font-size: 10px;
  line-height: 12px;
  color: ${({ $active }: { $active: boolean }) => ($active ? '#28AF6E' : '#A0A0A0')};
`;

const FabSlot = styled.View`
  width: ${layout.tabBar.fabSize}px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

const Fab = styled(Pressable)`
  width: ${layout.tabBar.fabSize}px;
  height: ${layout.tabBar.fabSize}px;
  border-radius: ${layout.tabBar.fabSize / 2}px;
  background-color: #28af6e;
  align-items: center;
  justify-content: center;
`;

const FabIcon = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export function BottomTabBar({ activeTab, onPressTab }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Wrapper $pb={Math.max(0, insets.bottom - 6)} testID="bottom-tab-bar">
      <Row>
        <HomeItem $active={activeTab === 'home'} onPress={() => onPressTab('home')}>
          <HomeIcon source={HOME_ICON} resizeMode="contain" />
          <Label $active={activeTab === 'home'} style={{ marginLeft: 0 }}>
            Home
          </Label>
        </HomeItem>

        <Item $active={activeTab === 'diagnose'} onPress={() => onPressTab('diagnose')}>
          <IconPlaceholder />
          <Label $active={activeTab === 'diagnose'}>Diagnose</Label>
        </Item>

        <FabSlot>
          <Fab
            onPress={() => onPressTab('scan')}
            style={{ marginBottom: layout.tabBar.fabBottomOffset }}
          >
            <FabIcon />
          </Fab>
        </FabSlot>

        <Item $active={activeTab === 'garden'} onPress={() => onPressTab('garden')}>
          <IconPlaceholder />
          <Label $active={activeTab === 'garden'}>My Garden</Label>
        </Item>

        <Item $active={activeTab === 'profile'} onPress={() => onPressTab('profile')}>
          <IconPlaceholder />
          <Label $active={activeTab === 'profile'}>Profile</Label>
        </Item>
      </Row>
    </Wrapper>
  );
}
