import { supabase } from "@/util/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

type SignInForm = z.infer<typeof signInSchema>;

export default function Index() {
  const router = useRouter();
  const [isEmailfocused, setIsEmailfocused] = useState(false);
  const [isPwdfocused, setIsPwdfocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data: SignInForm) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        Alert.alert("sign in failed", error.message);
      }
    } catch (error) {
      Alert.alert("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.h1}>Sign-In</Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              styles.input,
              errors.email && styles.inputError,
              isEmailfocused && styles.inputFocused,
            ]}
            placeholder="e.g. foo.bar@example.com"
            placeholderTextColor={"#ccc"}
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setIsEmailfocused(true)}
            onBlur={() => setIsEmailfocused(false)}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[
              styles.input,
              errors.password && styles.inputError,
              isPwdfocused && styles.inputFocused,
            ]}
            placeholder="please enter your pass"
            placeholderTextColor={"#ccc"}
            value={value}
            onChangeText={onChange}
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            onFocus={() => setIsPwdfocused(true)}
            onBlur={() => setIsPwdfocused(false)}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      {/* Submit Button */}
      <Pressable
        disabled={!isValid}
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSubmit(onSubmit)}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Sign In</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => router.push("/signUp")}
        style={[styles.button, { backgroundColor: "#ff6e6e" }]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
  },
  content: {},
  h1: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 14,
    fontSize: 16,
    color: "#000",
  },
  inputFocused: {
    borderColor: "#67b5fc",
    borderWidth: 2,
    backgroundColor: "#f9f9f9",
  },
  inputError: {
    borderColor: "#f42b2b",
  },
  error: {
    color: "#f42b2b",
    fontSize: 13,
    marginTop: 4,
  },
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
  buttonDisabled: { backgroundColor: "#c2c2c2", opacity: 0.6 },
});
