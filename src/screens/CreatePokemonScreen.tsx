import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

function CreatePokemonScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>CreatePokemonScreen</Text>
      <TouchableOpacity
        style={{ width: 100, padding: 10, backgroundColor: 'green' }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CreatePokemonScreen;
