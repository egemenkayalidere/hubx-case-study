import { Pressable } from 'react-native';
import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

type PlanKey = 'month' | 'year';

type Props = {
  selected: PlanKey;
  onSelect: (value: PlanKey) => void;
};

const Container = styled.View`
  height: 136px;
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
`;

const Content = styled.View`
  flex: 1;
  padding: 10px;
`;

const Option = styled(Pressable)<{ $active: boolean }>`
  height: 58px;
  width: 100%;
  position: relative;
  border-radius: 14px;
  padding: 12px 14px;
  flex-direction: row;
  align-items: center;
  border-width: ${({ $active }: { $active: boolean }) => ($active ? 1.5 : 1)}px;
  border-color: ${({ $active }: { $active: boolean }) =>
    $active ? '#28AF6E' : 'rgba(255,255,255,0.08)'};
  background-color: transparent;
`;

const Divider = styled.View`
  height: 10px;
`;

const Radio = styled.View<{ $active: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ $active }: { $active: boolean }) =>
    $active ? '#28AF6E' : 'rgba(255,255,255,0.22)'};
  align-items: center;
  justify-content: center;
`;

const RadioDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #28af6e;
`;

const Texts = styled.View`
  margin-left: 12px;
  flex: 1;
`;

const Title = styled(AppText)`
  width: 61px;
  height: 19px;
  font-family: 'Rubik_500Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  color: #ffffff;
`;

const Sub = styled(AppText)`
  margin-top: 2px;
  font-size: 11px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.72);
`;

const SavePill = styled.View`
  width: 77px;
  height: 26px;
  border-radius: 14px;
  background-color: #28af6e;
  align-items: center;
  justify-content: center;
`;

const SaveText = styled(AppText)`
  font-family: 'Rubik_600SemiBold';
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
`;

export function PaywallPlanOptions({ selected, onSelect }: Props) {
  return (
    <Container testID="paywall-plan-options">
      <Content>
        <Option $active={selected === 'month'} onPress={() => onSelect('month')}>
          <Radio $active={selected === 'month'}>{selected === 'month' ? <RadioDot /> : null}</Radio>
          <Texts>
            <Title>1 Month</Title>
            <Sub>$2.99/month, auto renewable</Sub>
          </Texts>
        </Option>

        <Divider />

        <Option $active={selected === 'year'} onPress={() => onSelect('year')}>
          <Radio $active={selected === 'year'}>{selected === 'year' ? <RadioDot /> : null}</Radio>
          <Texts>
            <Title>1 Year</Title>
            <Sub>First 3 days free, then $529.99/year</Sub>
          </Texts>
          <SavePill style={{ alignSelf: 'center' }}>
            <SaveText>50%</SaveText>
          </SavePill>
        </Option>
      </Content>
    </Container>
  );
}
