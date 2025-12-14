import { Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

export type TabKey = 'home' | 'diagnose' | 'scan' | 'garden' | 'profile';

const HOME_ICON = require('../../../assets/home/Icon.png');
const DIAGNOSE_ICON = require('../../../assets/home/healthcare 1.png');
const GARDEN_ICON = require('../../../assets/home/garden-Icon.png');
const PROFILE_ICON = require('../../../assets/home/profile-Icon.png');
const SCAN_BUTTON = require('../../../assets/home/Scan button.png');

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
  padding: 0px;
`;

const Item = styled(Pressable)<{ $active: boolean }>`
  width: 64px;
  height: 56px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 6px;
  opacity: ${({ $active }: { $active: boolean }) => ($active ? 1 : 0.55)};
`;

const HomeIcon = styled(Image)`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
`;

const DiagnoseIcon = styled(Image)`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
`;

const GardenIcon = styled(Image)`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
`;

const ProfileIcon = styled(Image)`
  width: ${layout.tabBar.itemIconSize}px;
  height: ${layout.tabBar.itemIconSize}px;
`;

const Label = styled(AppText)<{ $active: boolean }>`
  margin-top: 4px;
  font-size: 10px;
  line-height: 12px;
  color: ${({ $active }: { $active: boolean }) => ($active ? '#28AF6E' : '#A0A0A0')};
`;

const FabSlot = styled.View`
  width: ${layout.tabBar.fabWidth}px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

const Fab = styled(Pressable)`
  width: ${layout.tabBar.fabWidth}px;
  height: ${layout.tabBar.fabHeight}px;
  border-radius: ${layout.tabBar.fabHeight / 2}px;
  border-width: ${layout.tabBar.fabBorderWidth}px;
  border-color: ${layout.tabBar.fabBorderColor};
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const FabImg = styled(Image)`
  width: ${layout.tabBar.fabWidth}px;
  height: ${layout.tabBar.fabHeight}px;
`;

export function BottomTabBar({ activeTab, onPressTab }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Wrapper $pb={Math.max(0, insets.bottom - 6)} testID="bottom-tab-bar">
      <Row>
        <Item $active={activeTab === 'home'} onPress={() => onPressTab('home')}>
          <HomeIcon source={HOME_ICON} resizeMode="contain" />
          <Label $active={activeTab === 'home'}>Home</Label>
        </Item>

        <Item $active={activeTab === 'diagnose'} onPress={() => onPressTab('diagnose')}>
          <DiagnoseIcon source={DIAGNOSE_ICON} resizeMode="contain" />
          <Label $active={activeTab === 'diagnose'}>Diagnose</Label>
        </Item>

        <FabSlot>
          <Fab
            onPress={() => onPressTab('scan')}
            style={{ marginBottom: layout.tabBar.fabBottomOffset }}
          >
            <FabImg source={SCAN_BUTTON} resizeMode="contain" />
          </Fab>
        </FabSlot>

        <Item $active={activeTab === 'garden'} onPress={() => onPressTab('garden')}>
          <GardenIcon source={GARDEN_ICON} resizeMode="contain" />
          <Label $active={activeTab === 'garden'}>My Garden</Label>
        </Item>

        <Item $active={activeTab === 'profile'} onPress={() => onPressTab('profile')}>
          <ProfileIcon source={PROFILE_ICON} resizeMode="contain" />
          <Label $active={activeTab === 'profile'}>Profile</Label>
        </Item>
      </Row>
    </Wrapper>
  );
}
