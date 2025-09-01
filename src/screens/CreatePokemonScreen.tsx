import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PokemonCreteInput from '../components/PokemonCreateInput';
import PokemonButton from '../components/PokemonButton';

function CreatePokemonScreen() {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PokemonCreteInput
        title="Pokemon description"
        placeholder="Describe your Pokemon"
      />
      <PokemonCreteInput
        title="Pokemon image URL"
        placeholder="Enter image URL of your Pokemon"
      />
      <PokemonCreteInput
        title="Pokemon name"
        placeholder="Name of the Pokemon"
      />

      <PokemonButton
        title="Create Pokemon"
        style={{ backgroundColor: 'green' }}
        onPressHandler={onPressHandler}
      />
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
