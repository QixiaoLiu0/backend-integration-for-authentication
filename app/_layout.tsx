import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

// inner root nav component
function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inTabs = segments[0] === "tabs";

    if (!user && inTabs) {
      router.replace("/signIn");
    } else if (user && !inTabs) {
      router.replace("/tabs/protected-a");
    }
  }, [user, isLoading, segments]);

  return (
    <Stack>
      <Stack.Screen name="signIn/index" options={{ headerShown: false }} />
      <Stack.Screen name="signUp/index" options={{ headerShown: false }} />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}

// encapsulate RootLayoutNav with RootLayout
export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
