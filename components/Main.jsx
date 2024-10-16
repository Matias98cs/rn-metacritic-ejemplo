import { StatusBar } from "expo-status-bar";
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
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GameCard, { AnimatedGameCard } from "./GameCard";
import { Screen } from "./Screen";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames()
      .then((res) => {
        setGames(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({});
