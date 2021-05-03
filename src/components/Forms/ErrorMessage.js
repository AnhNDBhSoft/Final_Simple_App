import { StyleSheet } from "react-native";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return null;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});
