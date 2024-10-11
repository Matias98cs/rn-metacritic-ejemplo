import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  ScrollView,
  SafeAreaView,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";

export default function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    resizeMode: "center",
    borderRadius: 10,
  },
  card: {
    marginBottom: 42,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
  },
  score: {
    color: "green",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
