import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

type Props = {
  bgColor: string;
  key: number;
};

const InjectColor = (Props: Props) => {
  const { bgColor, key } = Props;
  const script = `document.body.style.backgroundColor = '${bgColor}';   true; `;
  
  return (
    <View style={{ flex: 1 }}>
      <WebView
        key={key}
        source={{ uri: "https://www.google.com" }}
        injectedJavaScript={script}
      />
    </View>
  );
};

export default InjectColor;
