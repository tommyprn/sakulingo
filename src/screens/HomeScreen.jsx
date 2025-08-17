import React from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const stones = Array.from(
  { length: 20 },
  (_, i) => ({
    id: i + 1,
    label: `${i + 1}`,
    status:
      i < 5
        ? "completed"
        : i === 5
          ? "legendary"
          : "locked",
  })
);

export default function StonePath() {
  const screenWidth =
    Dimensions.get("window").width;
  const pathWidth = screenWidth * 0.6; // lebar lintasan batu
  const centerX = screenWidth / 2 - 40; // supaya batu tetap kira2 tengah layar

  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 80,
      }}
      className="bg-green-300"
    >
      {stones.map((stone, idx) => {
        // gunakan fungsi sinus untuk posisi horizontal
        const amplitude = pathWidth / 2; // seberapa jauh melengkung
        const frequency = 0.8; // jarak antar gelombang
        const offsetX =
          Math.sin(idx * frequency) * amplitude;

        return (
          <View
            key={stone.id}
            className="my-10"
            style={{
              marginLeft: centerX + offsetX,
            }}
          >
            <StoneNode
              label={stone.label}
              status={stone.status}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

function StoneNode({ label, status }) {
  let colors;
  if (status === "completed") {
    colors = ["#6c5ce7", "#4834d4"]; // ungu
  } else if (status === "legendary") {
    colors = ["#fbc531", "#e1b12c"]; // emas
  } else {
    colors = ["#95a5a6", "#7f8c8d"]; // abu
  }

  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="w-20 h-20 rounded-full items-center justify-center shadow-lg shadow-black/50"
    >
      <Text className="text-white font-bold text-lg">
        {label}
      </Text>
    </LinearGradient>
  );
}
