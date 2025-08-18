import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getGoogleUserInfo } from "../utils/google-auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const WEB_ID =
    "219101721221-mbi2mfrkqaefc36tc467pg28i7lqgn07.apps.googleusercontent.com";
  const ANDROID_ID =
    "219101721221-os7elr7rlkc74kf5g3vrka33keap9cgq.apps.googleusercontent.com";
  const redirectUri = AuthSession.makeRedirectUri(
    {
      scheme: "com.satulingo.app",
    }
  );

  const navigation = useNavigation();

  const [request, response, promptAsync] =
    Google.useAuthRequest({
      webClientId: WEB_ID,
      androidClientId: ANDROID_ID,
      redirectUri,
    });

  const handleLogin = () => {
    // Di sini kamu bisa jalankan login google dulu
    // contoh: await promptAsync();
    // lalu kalau berhasil -> navigate ke LanguageScreen
    navigation.navigate("language");
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        getGoogleUserInfo(
          authentication.accessToken
        ).then((user) => {
          console.log("User Info:", user);
        });
      }
    }
  }, [response]);

  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <TouchableOpacity
        onPress={handleLogin}
        className="p-4 rounded-xl items-center bg-green-500 border-green-700 border-2"
      >
        <Text className="text-white text-lg font-bold">
          Login with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
