import { Stack } from "expo-router";
import SafeScreen from "@/comoponents/SafeScreen";

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeScreen>
  );
}
