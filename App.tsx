import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#333',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ScrollView
            style={styles.container}
            contentContainerStyle={{
              backgroundColor: 'pink',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.title}>Hello world</Text>
            <Image
              style={{ height: 100, width: 100 }}
              source={{
                uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTljTEC7O8OjiuyjE__jmWhoC1yqk9AqnDtd2SEyFB6ZotrdyB57kl-zdzo2hUg0RP4DR1AQCqmfxsVjeFdK_bcVw',
              }}
            />
            <TextInput
              style={{ backgroundColor: 'white', height: 50, width: '100%' }}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <Pressable onPress={() => console.log('Pressable Pressed')}>
              <Text>I'm pressable!</Text>
            </Pressable>

            <Button
              onPress={() => console.log('Button Pressed')}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log('TouchableOpacity Pressed')}
            >
              <Text>Press Here</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eaeaea',
    width: '100%',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
});

export default App;
