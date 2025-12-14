import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

import { GradientText } from '@/components/atoms/GradientText';
import { layout } from '@/theme/layout';

const ENVELOPE_ICON = require('../../../../assets/home/envelope.png');
const ARROW_ICON = require('../../../../assets/home/arrow.png');

const ENVELOPE_SIZE = 40;
const ARROW_SIZE = 18;
const BADGE_SIZE = 18;

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

const LeftIconSlot = styled.View`
  position: absolute;
  left: 20px;
  top: 50%;
  width: ${ENVELOPE_SIZE}px;
  height: ${ENVELOPE_SIZE}px;
`;

const Envelope = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Badge = styled.View`
  position: absolute;
  right: -4px;
  top: -4px;
  width: ${BADGE_SIZE}px;
  height: ${BADGE_SIZE}px;
  border-radius: ${BADGE_SIZE / 2}px;
  background-color: #ff3b30;
  align-items: center;
  justify-content: center;
`;

const BadgeText = styled(Text)`
  font-family: System;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  color: #f5c25b;
`;

const TitleSlot = styled.View`
  position: absolute;
  left: ${20 + ENVELOPE_SIZE + 20}px;
  top: 13px;
  height: 21px;
  right: ${14 + ARROW_SIZE + 10}px;
`;

const SubSlot = styled.View`
  position: absolute;
  left: ${20 + ENVELOPE_SIZE + 20}px;
  top: 35px;
  height: 16px;
  right: ${14 + ARROW_SIZE + 10}px;
`;

const Arrow = styled(Image)`
  position: absolute;
  right: 14px;
  top: 50%;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
`;

export function HomePremiumBox() {
  const titleStyle = {
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.32,
  } as const;

  const subStyle = {
    fontFamily: 'System',
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: 0,
    fontWeight: 400 as const,
  } as const;

  return (
    <Wrapper testID="home-premium-box">
      <Card>
        <LeftIconSlot style={{ transform: [{ translateY: -ENVELOPE_SIZE / 2 }] }}>
          <Envelope source={ENVELOPE_ICON} resizeMode="contain" />
          <Badge>
            <BadgeText>1</BadgeText>
          </Badge>
        </LeftIconSlot>
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
        <Arrow
          source={ARROW_ICON}
          resizeMode="contain"
          style={{ transform: [{ translateY: -ARROW_SIZE / 2 }] }}
        />
      </Card>
    </Wrapper>
  );
}
