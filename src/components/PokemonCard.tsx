import { useNavigation } from '@react-navigation/native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function PokemonCard() {
  const navigation = useNavigation();

  const navHandler = () => {
    navigation.navigate('PokemonDetail' as never);
  };

  return (
    <View style={{ width: '48%', aspectRatio: 1, borderRadius: 10 }}>
      <TouchableOpacity style={styles.card} onPress={navHandler}>
        <ImageBackground
          source={{
            uri: 'https://assets.puzzlefactory.com/puzzle/254/191/original.jpg',
          }}
          style={styles.imageBackground}
          blurRadius={70}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.descriptionText}>Pokemon Description</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '700',
    padding: 7,
  },
});

export default PokemonCard;
