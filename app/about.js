import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-40`}>
            <HomeIcon />
          </StyledPressable>
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
          facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam
          auctor purus non tortor
        </Text>

        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
          dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
          facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam
          auctor purus non tortor
        </Text>

        <Text className="text-white text-white/90 mb-4">
          lorem ipsum dolor sit amet consectetur adipiscing elit. Sed vel
          dignissim dui. Sed consectetur consequat urna, ut pulvinar nunc
          facilisis vel. Donec vel justo suscipit, id placerat nunc. Nullam
          auctor purus non tortor
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
