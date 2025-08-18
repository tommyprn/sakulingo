import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const LessonScreen = () => {
  const dummy = [
    {
      main: "Yukkuri hanashite kudasai berarti",
      title: "ゆっくり話してください",
      meaning: "tolong bicara pelan-pelan.",
      written: "yuk-ku-ri ha-na-shi-te ku-da-sa-i",
      description:
        "Ungkapan ini sering digunakan ketika kita ingin lawan bicara memperlambat kecepatan bicaranya, terutama saat kita masih belajar bahasa Jepang atau kesulitan memahami.",
    },
    {
      main: "Watashi wa nihongo o benkyou shiteimasu berarti",
      title: "私は日本語を勉強しています",
      meaning: "saya sedang belajar bahasa Jepang.",
      written: "wa-ta-shi wa ni-hon-go o ben-kyo-u shi-te-i-ma-su",
      description:
        "Kalimat ini sering digunakan oleh pelajar Jepang untuk memperkenalkan diri atau menjelaskan bahwa mereka sedang mempelajari bahasa Jepang.",
    },
    {
      main: "Ashita wa issho ni eiga o mimashou berarti",
      title: "明日は一緒に映画を見ましょう",
      meaning: "besok mari kita nonton film bersama.",
      written: "a-shi-ta wa is-sho ni e-i-ga o mi-ma-sho-u",
      description:
        "Kalimat ini umum digunakan saat mengajak teman atau kerabat untuk menonton film bersama di bioskop atau di rumah.",
    },
  ];

  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(dummy[0]);

  const handleNext = () => {
    const newValue = page + 1;
    setPage(newValue);
  };

  const handleBack = () => {
    const newValue = page - 1;
    setPage(newValue);
  };

  useEffect(() => {
    setSelected(dummy[page]);
  }, [page]);

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 32,
      }}
    >
      <View className="bg-green-50 border-2 border-green-400 rounded-xl p-5">
        <Text className="text-2xl font-bold text-center mb-2">
          {selected?.title}
        </Text>

        <Text className="text-base text-center text-blue-500 mb-3">
          [{selected?.written}]
        </Text>

        <Text className="text-base text-left mb-3">
          {selected?.main}{" "}
          <Text className="font-bold">{selected?.meaning}</Text>
        </Text>

        <Text className="text-sm leading-6 text-gray-700 mb-5">
          {selected?.description}
        </Text>

        <View className="flex-row gap-4">
          <TouchableOpacity
            onPress={handleBack}
            disabled={page === 0}
            className={`flex-1 py-3 rounded-lg items-center border-2
            ${
              page === 0
                ? "bg-gray-300 border-gray-400" // disabled
                : "bg-green-500 border-green-600" // normal
            }`}
          >
            <Text
              className={`text-base font-semibold 
              ${page === 0 ? "text-gray-500" : "text-white"}`}
            >
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleNext}
            disabled={page >= dummy?.length - 1}
            className={`flex-1 py-3 rounded-lg items-center border-2
            ${
              page >= dummy?.length - 1
                ? "bg-gray-300 border-gray-400" // disabled
                : "bg-green-500 border-green-600" // normal
            }`}
          >
            <Text
              className={`text-base font-semibold 
              ${page >= dummy?.length - 1 ? "text-gray-500" : "text-white"}`}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LessonScreen;
