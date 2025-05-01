import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const InjectColor = () => {
  const script = `document.body.style.backgroundColor = 'lightblue';`;

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://www.google.com' }} 
        injectedJavaScript={script} 
      />
    </View>
  );
};

export default InjectColor;