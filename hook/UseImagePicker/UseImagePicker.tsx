// ...rest of the import statements remain unchanged
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const UseImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return { pickImageAsync, selectedImage };

  // ...rest of the code remains same
};
