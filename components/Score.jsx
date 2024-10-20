import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return "bg-red-500";
    if (percentage < 98) return "bg-yellow-500";
    return "bg-green-500";
  };
  return (
    <View
      className={`${getColors()} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
