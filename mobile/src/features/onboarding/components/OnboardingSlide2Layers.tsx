import { Image } from 'react-native';
import styled from 'styled-components/native';

type LayerProps = {
  $top: number;
  $left: number;
  $width: number;
  $height: number;
  $rotationDeg: number;
};

const Layer = styled.View<LayerProps>`
  position: absolute;
  top: ${({ $top }: { $top: number }) => $top}px;
  left: ${({ $left }: { $left: number }) => $left}px;
  width: ${({ $width }: { $width: number }) => $width}px;
  height: ${({ $height }: { $height: number }) => $height}px;
  transform: ${({ $rotationDeg }: { $rotationDeg: number }) => `rotate(${$rotationDeg}deg)`};
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
`;

type OnboardingSlide2LayersProps = {
  artwork: { top: number; left: number; width: number; height: number; rotationDeg: number };
  phone: { top: number; left: number; width: number; height: number; rotationDeg: number };
  overlay: { top: number; left: number; width: number; height: number; rotationDeg: number };
  object: { top: number; left: number; width: number; height: number; rotationDeg: number };
  deviceWidth: number;
};

export function OnboardingSlide2Layers({
  artwork,
  phone,
  overlay,
  object,
  deviceWidth,
}: OnboardingSlide2LayersProps) {
  return (
    <>
      <Layer
        $top={object.top}
        $left={object.left}
        $width={object.width}
        $height={object.height}
        $rotationDeg={object.rotationDeg}
      >
        <Img
          resizeMode="contain"
          source={require('../../../../assets/onboarding/onboarding-slide-2-object.png')}
        />
      </Layer>

      <Layer
        $top={phone.top}
        $left={phone.left}
        $width={phone.width}
        $height={phone.height}
        $rotationDeg={phone.rotationDeg}
      >
        <Img
          resizeMode="contain"
          source={require('../../../../assets/onboarding/onboarding-slide-2-phone.png')}
        />
      </Layer>

      <Layer
        $top={artwork.top}
        $left={artwork.left}
        $width={artwork.width}
        $height={artwork.height}
        $rotationDeg={artwork.rotationDeg}
      >
        <Img
          resizeMode="contain"
          source={require('../../../../assets/onboarding/onboarding-slide-2-artwork.png')}
        />
      </Layer>

      <Layer
        $top={overlay.top}
        $left={overlay.left}
        $width={deviceWidth}
        $height={overlay.height}
        $rotationDeg={overlay.rotationDeg}
      >
        <Img
          resizeMode="stretch"
          source={require('../../../../assets/onboarding/onboarding-slide-2-overlay.png')}
        />
      </Layer>
    </>
  );
}
