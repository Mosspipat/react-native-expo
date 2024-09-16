import { useEffect, useRef, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

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
  const imageRef = useRef();

  const [showAppOptions, setShowAppOptions] = useState(false);
  const { pickImageAsync, selectedImage } = UseImagePicker(setShowAppOptions);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const [status, requestPermission] = MediaLibrary.usePermissions();

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

  const onSaveImageAsync = async () => {
    try {
      let localUri = null;

      // Check if the selectedImage exists and has dimensions
      if (selectedImage && selectedImage.width && selectedImage.height) {
        // Capture the reference with the original image's dimensions
        localUri = await captureRef(imageRef, {
          width: selectedImage.width,
          height: selectedImage.height,
          quality: 1,
        });
      } else {
        // If the dimensions are not available, capture with default dimensions
        localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
      }

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (status === null) {
    requestPermission();
  }

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
      <View ref={imageRef} collapsable={false} style={styles.container}>
        <ImageViewer
          placeholderImageSource={imagePlaceHolder}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={100} stickerSource={pickedEmoji} />
        )}
      </View>

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
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    width: "100%",
    height: "60%", // This will be overridden dynamically
  },
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
