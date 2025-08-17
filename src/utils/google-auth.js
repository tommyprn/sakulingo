// authService.ts
export async function getGoogleUserInfo(token) {
  const response = await fetch(
    "https://www.googleapis.com/userinfo/v2/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
}
