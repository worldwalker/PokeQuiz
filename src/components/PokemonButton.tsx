import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type PokemonButtonProps = {
  title: string;
  style?: any;
  textStyles?: any;
  onPressHandler: () => void;
};
function PokemonButton(props: PokemonButtonProps) {
  const { title, style = {}, textStyles = {}, onPressHandler } = props;
  return (
    <TouchableOpacity
      style={[styles.addPokemonButton, style]}
      onPress={onPressHandler}
    >
      <Text style={[styles.createText, textStyles]}>{title}</Text>
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
