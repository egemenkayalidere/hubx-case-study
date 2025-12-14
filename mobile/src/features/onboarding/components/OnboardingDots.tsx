import styled from 'styled-components/native';

type DotProps = {
  $active: boolean;
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.View<DotProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ $active }: { $active: boolean }) => ($active ? '#13231B' : '#C9D1CC')};
`;

const Spacer = styled.View`
  width: 8px;
`;

type OnboardingDotsProps = {
  count: number;
  activeIndex: number;
  testID?: string;
};

export function OnboardingDots({ count, activeIndex, testID }: OnboardingDotsProps) {
  return (
    <Row testID={testID}>
      {Array.from({ length: count }).map((_, i) => (
        <Row key={i}>
          <Dot $active={i === activeIndex} />
          {i < count - 1 ? <Spacer /> : null}
        </Row>
      ))}
    </Row>
  );
}
