
import { StyleSheet, Text, View } from 'react-native';
import TraumaCard from './components/TraumaCard/TraumaCard';
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <TraumaCard></TraumaCard>
    </View>
    </PaperProvider>
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
