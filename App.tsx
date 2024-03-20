import { Button, StyleSheet, Text, View } from "react-native";
import MyButtonNative from "./component/MyButtonNative/MyButtonNative";
import { UseImagePicker } from "./hook/UseImagePicker/UseImagePicker";
import { useState } from "react";
import ButtonSelectImage from "./component/ButtonSelectImage/ButtonSelectImage";
import { ImageViewer } from "./component/ImageViewer";
import { IconButton } from "./component/IconButton";
import { CircleButton } from "./component/CircleButton";

import imagePlaceHolder from "./assets/images/placeholder.png";

export default function App({ label }) {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const { pickImageAsync, selectedImage } = UseImagePicker(setShowAppOptions);

  const PickImage = async () => {
    const result = await pickImageAsync();
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "black",
      }}
    >
      <ImageViewer
        placeholderImageSource={imagePlaceHolder}
        selectedImage={selectedImage}
      />

      {!showAppOptions ? (
        <ButtonSelectImage label={"pick Image"} onPress={PickImage} />
      ) : (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      )}
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
