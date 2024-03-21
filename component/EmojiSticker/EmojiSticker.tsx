import { View, Image } from "react-native";
import Animated from "react-native-reanimated";

export const EmojiSticker = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};
