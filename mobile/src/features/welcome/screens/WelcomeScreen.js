import { StyleSheet, Text, View } from 'react-native';

import { useAppStore } from '../../../store/useAppStore';

export function WelcomeScreen() {
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);
  const setHasOnboarded = useAppStore((s) => s.setHasOnboarded);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>hasOnboarded: {String(hasOnboarded)}</Text>
      <Text style={styles.link} onPress={() => setHasOnboarded(!hasOnboarded)}>
        Toggle (Zustand)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  link: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '600',
  },
});


