import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';
import { colors } from '@/theme/colors';

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const LegalText = styled(AppText)`
  text-align: center;
  font-family: 'Rubik_400Regular';
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.07px;
  color: ${colors.legalText};
`;

const Underline = styled(AppText)`
  font-family: 'Rubik_400Regular';
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.07px;
  text-decoration-line: underline;
  color: ${colors.legalText};
`;

export function GetStartedLegal() {
  return (
    <Wrapper testID="get-started-legal">
      <LegalText>
        {'By tapping next, you are agreeing to PlantID\n'}
        <Underline>Terms of Use</Underline>
        {' & '}
        <Underline>Privacy Policy.</Underline>
      </LegalText>
    </Wrapper>
  );
}
