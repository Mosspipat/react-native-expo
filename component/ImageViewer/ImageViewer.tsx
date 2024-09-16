import React, { useState } from "react";
import { Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  return (
    <Image
      style={{
        // aspectRatio: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
      }}
      source={{ uri: selectedImage }}
    />
  );
}
