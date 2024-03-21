import { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UseImagePicker } from "./hook/UseImagePicker/UseImagePicker";
import ButtonSelectImage from "./component/ButtonSelectImage/ButtonSelectImage";
import { ImageViewer } from "./component/ImageViewer";
import { IconButton } from "./component/IconButton";
import { CircleButton } from "./component/CircleButton";
import { EmojiPicker } from "./component/EmojiPicker";
import { EmojiList } from "./component/EmojiList";
import { EmojiSticker } from "./component/EmojiSticker";

import imagePlaceHolder from "./assets/images/placeholder.png";
export default function App({ label }) {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const { pickImageAsync, selectedImage } = UseImagePicker(setShowAppOptions);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const PickImage = async () => {
    const result = await pickImageAsync();
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = () => {};

  return (
    <GestureHandlerRootView
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
      {pickedEmoji && (
        <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
      )}

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
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
