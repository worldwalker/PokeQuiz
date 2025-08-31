import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PokemonCreteInput from '../components/PokemonCreateInput';

function CreatePokemonScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <PokemonCreteInput title="Pokemon description" />
      <PokemonCreteInput title="Pokemon image URL" />
      <PokemonCreteInput title="Pokemon name" />

      <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
        <Text style={styles.createText}>Create Pokemon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createText: {
    color: 'white',
    fontSize: 14,
  },
});

export default CreatePokemonScreen;
