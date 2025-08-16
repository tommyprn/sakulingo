import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

// Ganti dengan client ID kamu dari Google Cloud Console
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

export default function LoginScreen() {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
      scopes: ["openid", "profile", "email"],
    },
    { authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth" }
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      fetchUserInfo(authentication.accessToken);
    }
  }, [response]);

  async function fetchUserInfo(token) {
    let res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const user = await res.json();
    setUserInfo(user);
  }

  return (
    <View style={styles.container}>
      {userInfo ? (
        <View style={styles.profile}>
          <Image source={{ uri: userInfo.picture }} style={styles.avatar} />
          <Text style={styles.welcome}>Welcome, {userInfo.name} 👋</Text>
          <Text>Email: {userInfo.email}</Text>
        </View>
      ) : (
        <Button
          disabled={!request}
          title="Login with Google"
          onPress={() => promptAsync()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  profile: { alignItems: "center" },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  welcome: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
});
