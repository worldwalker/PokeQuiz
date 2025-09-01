import { StyleSheet, Text, TextInput, View } from 'react-native';

type PokemonCreteInput = {
  title: string;
  placeholder: string;
};
function PokemonCreteInput(props: PokemonCreteInput) {
  const { title, placeholder } = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        multiline={true}
        placeholder={props.placeholder}
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
