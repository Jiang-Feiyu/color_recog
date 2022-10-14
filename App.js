import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import ImageColors from 'react-native-image-colors';

export default function App() {
  const [colors, setColors] = useState({
    "background": "",
    "detail": "",
    "platform": "",
    "primary": "",
    "secondary": "",
  });
  useEffect(() => {
  }, []);
  
  const click = async () => {
    const uri = require('./assets/eg.jpg')

    const result = await ImageColors.getColors(uri, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    })

    setColors(result)

    console.log("result", result);

  }

  return (
    <View style={styles.container}>
      <Text> Color Recognition!</Text>
      <Button title='识别颜色' onPress={() => {
        click();
      }}></Button>
      <Image source={require('./assets/eg.jpg')} style={{ width: 193, height: 110 }} />
      <Text>background:{colors.background}</Text>
      <Text>detail:{colors.detail}</Text>
      <Text>platform:{colors.platform}</Text>
      <Text>primary:{colors.primary}</Text>
      <Text>secondary:{colors.secondary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});