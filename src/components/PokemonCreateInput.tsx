import { StyleSheet, Text, TextInput, View } from 'react-native';

type PokemonCreteInput = {
  title: string;
};
function PokemonCreteInput(props: PokemonCreteInput) {
  console.log('PokemonCreteInput props', props);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        multiline={true}
        placeholder={props.title}
        placeholderTextColor={'#333'}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: { flex: 1, gap: 5, padding: 10 },
  title: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    height: '80%',
    padding: 5,
  },
});

export default PokemonCreteInput;
