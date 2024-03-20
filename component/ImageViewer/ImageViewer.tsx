import { Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <Image
      style={{ width: "100%", height: "60%" }}
      source={imageSource}
      //   style={styles.image}
    />
  );
}
