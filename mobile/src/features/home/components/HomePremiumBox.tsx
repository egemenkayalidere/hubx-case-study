import { Text } from 'react-native';
import styled from 'styled-components/native';

import { GradientText } from '@/components/atoms/GradientText';
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
  align-items: flex-start;
  padding: 0 16px;
`;

const LeftIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.12);
  margin-top: 12px;
`;

const Texts = styled.View`
  margin-left: 16px;
  flex: 1;
  padding-top: 13px;
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
  const titleStyle = {
    width: 183,
    height: 21,
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
  } as const;

  return (
    <Wrapper testID="home-premium-box">
      <Card>
        <LeftIcon />
        <Texts>
          <GradientText colors={['#E5C990', '#E4B046']} style={titleStyle}>
            <Text style={{ fontWeight: 700 }}>FREE </Text>
            <Text style={{ fontWeight: 600 }}>Premium Available</Text>
          </GradientText>
          <Sub>Tap to upgrade your account!</Sub>
        </Texts>
        <RightIcon />
      </Card>
    </Wrapper>
  );
}
