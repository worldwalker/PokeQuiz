import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type PokemonButtonProps = {
  onPressHandler: () => void;
};
function PokemonButton(props: PokemonButtonProps) {
  return (
    <TouchableOpacity
      style={styles.addPokemonButton}
      onPress={props.onPressHandler}
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
