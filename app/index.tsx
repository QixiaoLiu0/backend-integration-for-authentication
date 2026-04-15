import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";

export default function Index() {
  const { user, isLoading } = useAuth();

  if (user) {
    return <Redirect href="/tabs/protected-a" />;
  } else {
    return <Redirect href="/signIn" />;
  }
}
