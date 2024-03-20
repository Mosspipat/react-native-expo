// ...rest of the import statements remain unchanged
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const UseImagePicker = (
  setShowAppOptions: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      console.log("You did not select any image.");
    }
  };

  return { pickImageAsync, selectedImage };
};
