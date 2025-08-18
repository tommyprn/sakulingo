import { useState } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const languages = [
  { code: "en", label: "English" },
  { code: "jp", label: "Japanese" },
];

const LanguageScreen = () => {
  const [selectedLang, setSelectedLang] = useState({});
  const navigation = useNavigation();

  const handleSelect = (code) => {
    setSelectedLang(code);
    // console.log("Language selected:", code);
  };

  const handleSubmit = () => {
    Alert.alert(
      "Bahasa dipilih",
      `Kamu memilih mempelajari bahasa ${selectedLang.label}`,
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("main"),
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <Text className="text-2xl font-bold mb-8">Pilih Bahasa</Text>

      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          className={`w-full py-4 mb-4 rounded-2xl border items-center ${
            selectedLang.code === lang.code
              ? "bg-green-500 border-green-700 border-2"
              : "border-gray-400"
          }`}
          onPress={() => handleSelect(lang)}
        >
          <Text
            className={`text-lg font-bold ${
              selectedLang.code === lang.code ? "text-white" : "text-gray-700"
            }`}
          >
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        onPress={handleSubmit}
        className="w-full py-4 mt-6 rounded-2xl bg-blue-500 items-center"
      >
        <Text className="text-white text-lg font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageScreen;
