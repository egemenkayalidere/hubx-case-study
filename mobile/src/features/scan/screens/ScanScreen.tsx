import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { Button } from '@/components/atoms/Button';
import { Screen } from '@/components/atoms/Screen';
import { AppText } from '@/components/atoms/Text';
import type { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Scan'>;

const Close = styled(Pressable)<{ $top: number }>`
  position: absolute;
  left: 16px;
  top: ${({ $top }: { $top: number }) => `${$top}px`};
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const CloseText = styled(AppText)`
  font-size: 28px;
  line-height: 28px;
  color: #ffffff;
`;

export function ScanScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [permission, requestPermission] = useCameraPermissions();

  return (
    <Screen testID="scan-screen" paddingHorizontal={0} paddingVertical={0} edges={[]}>
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <Close $top={insets.top} onPress={() => navigation.goBack()}>
          <CloseText>×</CloseText>
        </Close>

        {permission?.granted ? (
          <CameraView style={{ flex: 1 }} />
        ) : (
          <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
            <AppText style={{ color: '#ffffff', textAlign: 'center', marginBottom: 12 }}>
              Kamera izni gerekli
            </AppText>
            <Button variant="primary" fullWidth onPress={() => requestPermission()}>
              İzin ver
            </Button>
          </View>
        )}
      </View>
    </Screen>
  );
}
