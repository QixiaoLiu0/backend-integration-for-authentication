import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#386de5" }}
    >
      <Tabs.Screen
        name="protected-a/index"
        options={{
          title: "protected a",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="protected-b/index"
        options={{
          title: "protected b",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="arrows-alt" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
