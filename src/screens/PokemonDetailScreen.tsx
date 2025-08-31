import { StyleSheet, Text, View } from 'react-native';
import PokemonButton from '../components/PokemonButton';
import { useNavigation } from '@react-navigation/native';

function PokemonDetailScreen() {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View></View>
      <PokemonButton onPressHandler={onPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PokemonDetailScreen;
