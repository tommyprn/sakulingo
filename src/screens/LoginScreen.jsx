import React, { useEffect } from "react";
import { Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { getGoogleUserInfo } from "../utils/google-auth";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const WEB_ID =
    "219101721221-mbi2mfrkqaefc36tc467pg28i7lqgn07.apps.googleusercontent.com";
  const ANDROID_ID =
    "219101721221-os7elr7rlkc74kf5g3vrka33keap9cgq.apps.googleusercontent.com";
  const redirectUri = AuthSession.makeRedirectUri(
    {
      scheme: "com.satulingo.app", // must match scheme in app.json
    }
  );

  const [request, response, promptAsync] =
    Google.useAuthRequest({
      webClientId: WEB_ID,
      androidClientId: ANDROID_ID,
      redirectUri,
    });

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
    <Button
      title="Login with Google"
      disabled={!request}
      onPress={() => promptAsync()}
    />
  );
}
