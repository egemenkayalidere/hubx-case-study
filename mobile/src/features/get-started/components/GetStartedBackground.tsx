import { Image } from 'react-native';
import styled from 'styled-components/native';

const Bg = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export function GetStartedBackground() {
  return (
    <Bg
      testID="get-started-background"
      resizeMode="cover"
      source={require('../../../../assets/get-started/get-started-background.png')}
    />
  );
}
