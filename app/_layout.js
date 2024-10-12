import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Slot />
    </View>
  );
}
