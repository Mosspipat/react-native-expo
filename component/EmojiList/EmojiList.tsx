import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";

import emoji_1 from "../../assets/images/emoji1.png";
import emoji_2 from "../../assets/images/emoji2.png";
import emoji_3 from "../../assets/images/emoji3.png";
import emoji_4 from "../../assets/images/emoji4.png";
import emoji_5 from "../../assets/images/emoji5.png";

export const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([emoji_1, emoji_2, emoji_3, emoji_4, emoji_5]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
