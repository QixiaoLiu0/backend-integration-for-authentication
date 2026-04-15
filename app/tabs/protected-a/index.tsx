import { supabase } from "@/util/supabase";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("sign out failed!");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>protected a index</Text>
      <Pressable onPress={handleSignOut} style={[styles.button]}>
        <Text style={styles.buttonText}>Sign out</Text>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { marginTop: 50 },
  text: { fontSize: 30 },
  button: {
    backgroundColor: "rgb(68, 181, 252)",
    borderRadius: 6,
    padding: 16,
    alignItems: "center",
    marginTop: 28,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
