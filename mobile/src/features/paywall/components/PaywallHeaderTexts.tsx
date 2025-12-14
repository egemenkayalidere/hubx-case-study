import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  padding: 0 ${layout.screenPaddingHorizontal}px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const TitleBold = styled(AppText)`
  font-family: 'Rubik_600SemiBold';
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
`;

const TitleLight = styled(AppText)`
  margin-left: 6px;
  font-family: 'Rubik_300Light';
  font-size: 32px;
  line-height: 38px;
  color: rgba(255, 255, 255, 0.85);
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
        <TitleBold>PlantApp</TitleBold>
        <TitleLight>Premium</TitleLight>
      </TitleRow>
      <Subtitle>Access All Features</Subtitle>
    </Wrapper>
  );
}
