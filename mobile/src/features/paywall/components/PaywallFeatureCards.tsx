import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

const Row = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})``;

const Spacer = styled.View`
  width: 12px;
`;

const Card = styled.View`
  width: 156px;
  height: 130px;
  border-radius: 14px;
`;

const CardContent = styled.View`
  flex: 1;
  padding: 16px 14px;
`;

const IconBox = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.08);
  align-items: center;
  justify-content: center;
`;

const IconDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const Title = styled(AppText)`
  margin-top: 14px;
  font-family: 'Rubik_600SemiBold';
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Subtitle = styled(AppText)`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.72);
`;

type Feature = {
  title: string;
  subtitle: string;
};

const FEATURES: Feature[] = [
  { title: 'Unlimited', subtitle: 'Plant Identify' },
  { title: 'Faster', subtitle: 'Process' },
  { title: 'Detailed', subtitle: 'Plant care' },
];

export function PaywallFeatureCards() {
  return (
    <Row testID="paywall-feature-cards">
      {FEATURES.map((f, idx) => (
        <View key={f.title} style={{ flexDirection: 'row' }}>
          <Card>
            <CardContent>
              <IconBox>
                <IconDot />
              </IconBox>
              <Title>{f.title}</Title>
              <Subtitle>{f.subtitle}</Subtitle>
            </CardContent>
          </Card>
          {idx === FEATURES.length - 1 ? null : <Spacer />}
        </View>
      ))}
    </Row>
  );
}
