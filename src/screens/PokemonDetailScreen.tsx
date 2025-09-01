import { StyleSheet, Text, View } from 'react-native';
import PokemonButton from '../components/PokemonButton';
import { useNavigation } from '@react-navigation/native';
import FlippablePokemonCard from '../components/FlippablePokemonCard';

function PokemonDetailScreen() {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.flipCardContainer}>
        <FlippablePokemonCard />
      </View>
      <View style={styles.buttonsContainer}>
        <PokemonButton
          title="Delete"
          style={{ backgroundColor: 'red' }}
          onPressHandler={onPressHandler}
        />
        <PokemonButton
          title="Update"
          style={{ backgroundColor: 'blue' }}
          onPressHandler={onPressHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flipCardContainer: {
    flex: 1,
    padding: 10,
  },
  buttonsContainer: {
    gap: 10,
  },
});

export default PokemonDetailScreen;
