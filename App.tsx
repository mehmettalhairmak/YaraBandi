import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const App = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        İnsanlar birbirlerine yara bandı olabilecekken yara oluyor..
      </Text>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Image
          source={require('./assets/images/yara-bandi.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Pressable
            style={styles.modalView}
            onPress={() => setModalVisible(!modalVisible)}>
            <Video
              repeat
              resizeMode="stretch"
              style={{flex: 1, borderRadius: 50}}
              source={require('./assets/videos/motivationVideo.mp4')}
            />
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
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
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 10,
    fontFamily: 'Satisfy-Regular',
  },
  image: {
    width: width / 1.2,
    height: height / 4,
  },
  modalView: {
    borderRadius: 50,
    width: width / 1.2,
    height: height / 1.5,
    backgroundColor: 'white',
  },
});
