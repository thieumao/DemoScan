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

  const handleOnPictureTaken = () => {}

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
        <DocumentScanner
          style={styles.scanner}
          onPictureTaken={handleOnPictureTaken}
          overlayColor="rgba(255,130,0, 0.7)"
          enableTorch={false}
          quality={0.5}
          detectionCountBeforeCapture={5}
          detectionRefreshRateInMS={50}
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
  scanner: {
    backgroundColor: 'red',
    width: '100%',
    height: '80%',
  },
  your: {
    backgroundColor: 'red',
    width: '100%',
    height: '80%',
  },
});

export default App;
