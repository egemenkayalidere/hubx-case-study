import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const LegalText = styled(AppText)`
  text-align: center;
`;

export function GetStartedLegal() {
  return (
    <Wrapper testID="get-started-legal">
      <LegalText>
        {'By tapping next, you are agreeing to PlantID\nTerms of Use & Privacy Policy.'}
      </LegalText>
    </Wrapper>
  );
}
