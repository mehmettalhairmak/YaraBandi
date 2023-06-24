import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        İnsanlar birbirlerine yara bandı olabilecekken yara oluyor..
      </Text>
      <Image
        source={require('./assets/images/yara-bandi.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: 10,
    fontFamily: 'Satisfy-Regular',
  },
  image: {
    width: width / 1.2,
    height: height / 4,
  },
});
