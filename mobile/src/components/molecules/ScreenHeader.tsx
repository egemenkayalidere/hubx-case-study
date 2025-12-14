import styled from 'styled-components/native';

import { AppText } from '@/components/atoms/Text';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  testID?: string;
};

const Wrapper = styled.View`
  gap: 6px;
  margin-bottom: 16px;
`;

const Title = styled(AppText)`
  font-size: 18px;
  font-weight: 600;
`;

const Subtitle = styled(AppText)`
  color: #666;
`;

export function ScreenHeader({ title, subtitle, testID }: ScreenHeaderProps) {
  return (
    <Wrapper testID={testID}>
      <Title>{title}</Title>
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    </Wrapper>
  );
}
