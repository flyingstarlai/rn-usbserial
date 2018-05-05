import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UsbSerial } from 'react-native-usbserial'


export default class App extends React.Component {
  componentDidMount() {
    this.getDevice();
  }

  getDevice = async () => {
    try {
      const usbs = new UsbSerial();
      const deviceList = await usbs.getDeviceListAsync();
      console.log(deviceList)
    } catch(error) { console.log(error)}
  }

  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="md-checkmark-circle" size={32} color="blue" />
        <Text>ASUUUU</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
