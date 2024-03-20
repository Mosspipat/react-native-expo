import { Pressable, StyleSheet, Text, View } from "react-native";
import MyButtonNative from "./component/MyButtonNative/MyButtonNative";
import { UseImagePicker } from "./hook/UseImagePicker/UseImagePicker";
import { useState } from "react";
import ButtonSelectImage from "./component/ButtonSelectImage/ButtonSelectImage";
import { ImageViewer } from "./component/ImageViewer";
import imagePlaceHolder from "./assets/images/placeholder.png";

export default function App({ label }) {
  const { pickImageAsync, selectedImage } = UseImagePicker();

  const PickImage = async () => {
    const result = await pickImageAsync();
  };
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <ImageViewer
        placeholderImageSource={imagePlaceHolder}
        selectedImage={selectedImage}
      />
      <ButtonSelectImage label={"pick Image"} onPress={PickImage} />
    </View>
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
    backgroundColor: "red",
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
