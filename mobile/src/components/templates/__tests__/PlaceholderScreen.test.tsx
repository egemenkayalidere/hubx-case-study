import { render } from '@testing-library/react-native';

import { PlaceholderScreen } from '@/components/templates/PlaceholderScreen';

describe('PlaceholderScreen', () => {
  it('renders title and subtitle', () => {
    const { getByText } = render(
      <PlaceholderScreen title="Diagnose" subtitle="Placeholder ekran" testID="x" />,
    );

    expect(getByText('Diagnose')).toBeTruthy();
    expect(getByText('Placeholder ekran')).toBeTruthy();
  });

  it('renders idLabel when provided', () => {
    const { getByText } = render(<PlaceholderScreen title="Detail" idLabel="id: 123" />);
    expect(getByText('id: 123')).toBeTruthy();
  });
});
