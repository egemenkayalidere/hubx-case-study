import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { colors } from '@/theme/colors';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  margin-top: ${layout.getStarted.headerOffsetFromSafeAreaTop}px;
  max-width: ${layout.getStarted.headerMaxWidth}px;
`;

const Title = styled(AppText)`
  width: 286px;
  height: 33px;
  font-family: 'Rubik_400Regular';
  font-size: 28px;
  line-height: 28px;
  letter-spacing: 0.07px;
`;

const TitleLight = styled(AppText)`
  font-family: 'Rubik_300Light';
  letter-spacing: 0.07px;
`;

const TitleBold = styled(AppText)`
  font-family: 'Rubik_600SemiBold';
  letter-spacing: 0.07px;
`;

const Subtitle = styled(AppText)`
  margin-top: 8px;
  color: ${colors.textPrimary70};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.07px;
`;

export function GetStartedTexts() {
  return (
    <Wrapper testID="get-started-texts">
      <Title>
        <TitleLight>Welcome to </TitleLight>
        <TitleBold>PlantApp</TitleBold>
      </Title>
      <Subtitle>{'Identify more than 3000+ plants and\n88% accuracy.'}</Subtitle>
    </Wrapper>
  );
}
