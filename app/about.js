import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";

export default function About() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/">
        <Pressable>
          <HomeIcon />
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4A">
        lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
        dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
        facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullram
        auctor purus non tortor
      </Text>

      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
        dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
        facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam auctor
        purus non tortor
      </Text>

      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
        dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
        facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam auctor
        purus non tortor
      </Text>

      <Text className="text-white text-white/90 mb-4">
        lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
        dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
        facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam auctor
        purus non tortor
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
