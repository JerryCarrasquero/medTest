
import { StyleSheet, Text, View } from 'react-native';
import TraumaCard from './components/TraumaCard/TraumaCard';

export default function App() {
  return (
    <View style={styles.container}>
      <TraumaCard></TraumaCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
