import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  padding: 0 ${layout.screenPaddingHorizontal}px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  width: 248px;
  height: 47px;
  align-items: flex-end;
`;

const TitlePlantApp = styled(AppText)`
  font-family: 'Rubik_700Bold';
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
`;

const TitlePremium = styled(AppText)`
  margin-left: 6px;
  font-family: 'Rubik_700Bold';
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
`;

const Subtitle = styled(AppText)`
  margin-top: 20px;
  width: 157px;
  height: 24px;
  font-family: 'Rubik_300Light';
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: rgba(255, 255, 255, 0.7);
`;

export function PaywallHeaderTexts() {
  return (
    <Wrapper>
      <TitleRow>
        <TitlePlantApp>PlantApp</TitlePlantApp>
        <TitlePremium>Premium</TitlePremium>
      </TitleRow>
      <Subtitle>Access All Features</Subtitle>
    </Wrapper>
  );
}
