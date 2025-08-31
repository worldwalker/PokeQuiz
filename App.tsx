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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsScreen from './src/screens/PokemonsScreen';
import PokemonDetailScreen from './src/screens/PokemonDetailScreen';
import UpdatePokemonScreen from './src/screens/UpdatePokemonScreen';
import CreatePokemonScreen from './src/screens/CreatePokemonScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
          <Stack.Navigator initialRouteName="Pokemons">
            <Stack.Screen name="Pokemons" component={PokemonsScreen} />
            <Stack.Screen
              name="PokemonDetail"
              component={PokemonDetailScreen}
            />
            <Stack.Screen
              name="UpdatePokemon"
              component={UpdatePokemonScreen}
            />
            <Stack.Screen
              name="CreatePokemon"
              component={CreatePokemonScreen}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
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
