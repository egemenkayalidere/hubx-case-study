import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { layout } from '@/theme/layout';

const Wrapper = styled.View`
  margin-top: ${layout.getStarted.headerOffsetFromSafeAreaTop}px;
  max-width: ${layout.getStarted.headerMaxWidth}px;
`;

const Title = styled(AppText)`
  /* Tipografi detaylarına sonra ineceğiz */
  font-size: 32px;
  font-weight: 600;
`;

const TitleBold = styled(AppText)`
  font-weight: 800;
`;

const Subtitle = styled(AppText)`
  margin-top: 8px;
  color: #6b6b6b;
`;

export function GetStartedTexts() {
  return (
    <Wrapper testID="get-started-texts">
      <Title>
        Welcome to <TitleBold>PlantApp</TitleBold>
      </Title>
      <Subtitle>{'Identify more than 3000+ plants and\n88% accuracy.'}</Subtitle>
    </Wrapper>
  );
}
