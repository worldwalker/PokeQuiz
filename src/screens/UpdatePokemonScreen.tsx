import { StyleSheet, Text, View } from 'react-native';
import PokemonCreteInput from '../components/PokemonCreateInput';
import PokemonButton from '../components/PokemonButton';
import { useNavigation } from '@react-navigation/native';

function UpdatePokemonScreen() {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PokemonCreteInput title="Pokemon description" />
      <PokemonCreteInput title="Pokemon image URL" />
      <PokemonCreteInput title="Pokemon name" />

      <PokemonButton
        title="Update Pokemon"
        style={{ backgroundColor: 'blue' }}
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

export default UpdatePokemonScreen;
