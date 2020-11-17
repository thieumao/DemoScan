import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; 
import DocumentScanner from "@woonivers/react-native-document-scanner"

const App = () => {
  // image: data.croppedImage,
  //             initialImage: data.initialImage,
  //             rectangleCoordinates: data.rectangleCoordinates
  const [image, setImage] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
        <DocumentScanner
          useBase64
          saveInAppDocument={false}
          onPictureTaken={data => setState(data.croppedImage)}
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          brightness={0.3}
          saturation={1}
          contrast={1.1}
          quality={0.5}
          onRectangleDetect={({ stableCounter, lastDetectionType }) => null}
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
          onPermissionsDenied={() => console.log("Permissions Denied")}
        />
        <Image
          source={{ uri: `data:image/jpeg;base64,${image}` }}
          resizeMode="contain"
        />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '100%',
  },
  your: {
    backgroundColor: 'red',
    width: '100%',
    height: '80%',
  },
});

export default App;
