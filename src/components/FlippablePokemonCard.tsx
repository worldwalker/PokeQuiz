import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';

function FlippablePokemonCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  console.log('flipAnimation', flipAnimation);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ perspective: 1000 }, { rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ perspective: 1000 }, { rotateY: backInterpolate }],
  };

  const handlePress = () => {
    setIsFlipped(!isFlipped);
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      useNativeDriver: true,
      tension: 20,
    }).start();
  };

  return (
    <TouchableOpacity style={styles.cardButton} onPress={handlePress}>
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <ImageBackground
            source={{
              uri: 'https://assets.puzzlefactory.com/puzzle/254/191/original.jpg',
            }}
            style={styles.imageBackground}
            resizeMode="cover"
            imageStyle={{ borderRadius: 10 }}
            blurRadius={40}
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Pokemon description</Text>
              <Text style={styles.cardText}>Press to flip</Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View style={[styles.card, backAnimatedStyle]}>
          <ImageBackground
            source={{
              uri: 'https://assets.puzzlefactory.com/puzzle/254/191/original.jpg',
            }}
            resizeMode="cover"
            blurRadius={40}
            imageStyle={{ borderRadius: 10 }}
            style={styles.imageBackground}
          >
            <Image
              source={{
                uri: 'https://assets.puzzlefactory.com/puzzle/254/191/original.jpg',
              }}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.cardTitle}>Pokemon name</Text>
          </ImageBackground>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardButton: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  textContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '300',
    color: 'yellow',
    fontStyle: 'italic',
  },
});

export default FlippablePokemonCard;
