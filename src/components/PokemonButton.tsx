import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function PokemonButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.addPokemonButton}
      onPress={() => {
        navigation.navigate('CreatePokemon' as never);
      }}
    >
      <Text style={styles.createText}>Create Pokemon</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

export default PokemonButton;
