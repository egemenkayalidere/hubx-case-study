import styled from 'styled-components/native';

type DotProps = {
  $active: boolean;
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10px;
`;

const Dot = styled.View<DotProps>`
  width: ${({ $active }: { $active: boolean }) => ($active ? 10 : 6)}px;
  height: ${({ $active }: { $active: boolean }) => ($active ? 10 : 6)}px;
  border-radius: ${({ $active }: { $active: boolean }) => ($active ? 5 : 3)}px;
  background-color: ${({ $active }: { $active: boolean }) => ($active ? '#13231B' : '#13231B40')};
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
