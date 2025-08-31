import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import PokemonCard from '../components/PokemonCard';

function PokemonsScreen() {
  const navigation = useNavigation();

  console.log('navigation', navigation);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ backgroundColor: '#fff', padding: 10 }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <View style={{ width: '48%', aspectRatio: 1 }}>
          <TouchableOpacity
            style={styles.addMore}
            onPress={() => {
              navigation.navigate('CreatePokemon' as never);
            }}
          >
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addPokemonButton}
        onPress={() => {
          navigation.navigate('CreatePokemon' as never);
        }}
      >
        <Text style={styles.createText}>Create Pokemon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  addMore: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e8e8e8',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  plus: {
    fontSize: 50,
    color: 'black',
  },
  addPokemonButton: {
    width: '100%',
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createText: {
    color: 'white',
    fontSize: 14,
  },
});

export default PokemonsScreen;
