import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const languages = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ms", label: "Bahasa Malaysia" },
  { code: "nl", label: "Nederlands" },
];

const LanguageScreen = () => {
  const [selectedLang, setSelectedLang] =
    useState < string > "en";

  const handleSelect = (code) => {
    setSelectedLang(code);
    // TODO: sambungkan ke i18next atau context global
    console.log("Language selected:", code);
  };

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Text className="text-2xl font-bold mb-8">
        Pilih Bahasa
      </Text>

      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          className={`w-full py-4 mb-4 rounded-2xl border items-center ${
            selectedLang === lang.code
              ? "bg-green-500 border-green-500"
              : "border-gray-400"
          }`}
          onPress={() => handleSelect(lang.code)}
        >
          <Text
            className={`text-lg ${
              selectedLang === lang.code
                ? "text-white font-bold"
                : "text-gray-700"
            }`}
          >
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LanguageScreen;
