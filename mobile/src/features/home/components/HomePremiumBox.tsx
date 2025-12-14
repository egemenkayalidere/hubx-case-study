import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

import { GradientText } from '@/components/atoms/GradientText';
import { layout } from '@/theme/layout';

const ENVELOPE_ICON = require('../../../../assets/home/envelope.png');
const ARROW_ICON = require('../../../../assets/home/arrow.png');

const Wrapper = styled.View`
  padding: 0 ${layout.screenPaddingHorizontal}px;
  margin-top: ${layout.home.premiumBox.topGapFromHeader}px;
`;

const Card = styled.View`
  width: 100%;
  height: ${layout.home.premiumBox.height}px;
  border-radius: 12px;
  background-color: #1f1f1f;
  position: relative;
`;

const Envelope = styled(Image)`
  position: absolute;
  left: 20px;
  top: 20.77px;
  width: 32px;
  height: 32px;
`;

const Badge = styled.View`
  position: absolute;
  left: 44px;
  top: 14px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #ff3b30;
  align-items: center;
  justify-content: center;
`;

const BadgeText = styled(Text)`
  font-family: System;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: #f5c25b;
`;

const TitleSlot = styled.View`
  position: absolute;
  left: 72px;
  top: 13px;
  width: 183px;
  height: 21px;
`;

const SubSlot = styled.View`
  position: absolute;
  left: 72px;
  top: 35px;
  width: 228px;
  height: 16px;
`;

const Arrow = styled(Image)`
  position: absolute;
  right: 14px;
  top: 21px;
  width: 12px;
  height: 12px;
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

  const subStyle = {
    width: 228,
    height: 16,
    fontFamily: 'System',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: 400 as const,
  } as const;

  return (
    <Wrapper testID="home-premium-box">
      <Card>
        <Envelope source={ENVELOPE_ICON} resizeMode="contain" />
        <Badge>
          <BadgeText>1</BadgeText>
        </Badge>
        <TitleSlot>
          <GradientText colors={['#E5C990', '#E4B046']} style={titleStyle}>
            <Text style={{ fontWeight: 700 }}>FREE </Text>
            <Text style={{ fontWeight: 600 }}>Premium Available</Text>
          </GradientText>
        </TitleSlot>
        <SubSlot>
          <GradientText colors={['#FFDE9C', '#F5C25B']} style={subStyle}>
            Tap to upgrade your account!
          </GradientText>
        </SubSlot>
        <Arrow source={ARROW_ICON} resizeMode="contain" />
      </Card>
    </Wrapper>
  );
}
