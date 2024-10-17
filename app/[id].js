import { Link, Stack } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getGameDetails(id)
        .then(setGameInfo)
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);


  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff024" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "Detalle del juego",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="flex-1 justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294 }}
              /> 
              <Text className="text-white font-bold text-2xl">
                {gameInfo.title}
              </Text>
              <Text className="text-left mt-4 text-white/70 font-bold mb-8 text-base">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
