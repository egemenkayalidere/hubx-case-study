import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  padding: 0 ${layout.screenPaddingHorizontal}px;
  margin-top: ${layout.home.premiumBox.topGapFromHeader}px;
`;

const Card = styled.View`
  width: 100%;
  height: ${layout.home.premiumBox.height}px;
  border-radius: 12px;
  background-color: #1f1f1f;
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
`;

const LeftIcon = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.12);
`;

const Texts = styled.View`
  margin-left: 12px;
  flex: 1;
`;

const Title = styled(AppText)`
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

const Sub = styled(AppText)`
  margin-top: 2px;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.72);
`;

const RightIcon = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background-color: rgba(255, 255, 255, 0.12);
`;

export function HomePremiumBox() {
  return (
    <Wrapper testID="home-premium-box">
      <Card>
        <LeftIcon />
        <Texts>
          <Title>FREE Premium Available</Title>
          <Sub>Tap to upgrade your account!</Sub>
        </Texts>
        <RightIcon />
      </Card>
    </Wrapper>
  );
}
