import { Pressable, Text, StyleSheet } from "react-native";

export default function ButtonSelectImage({ label, onPress }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={{ color: "white" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    backgroundColor: "blue",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
