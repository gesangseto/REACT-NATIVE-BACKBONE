/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {splash_screen_img} from '../assets';
import {InputText} from '../component';

const SplashScreen = ({navigation}) => {
  const modalAddApi = useRef(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [endpoint, setEndpoint] = useState('http://151.106.112.32:8282');
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      setTimeout(() => {
        (async function () {
          let profile = await AsyncStorage.getItem('profile');
          let endpoint = await AsyncStorage.getItem('endpoint');
          if (!endpoint) {
            modalAddApi.current?.open();
          } else if (!profile) {
            navigation.navigate('Login');
          } else {
            navigation.navigate('HomePage');
          }
        })();
      }, 500);
    }
  }, [initialLoad, endpoint]);

  const handleSubmitEndpoint = async () => {
    modalAddApi.current?.close();
    await AsyncStorage.setItem('endpoint', `${endpoint}`);
    navigation.replace('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <ImageBackground
            source={splash_screen_img}
            style={{
              width: null,
              height: '100%',
            }}
          />
        </View>
      </View>

      <Portal>
        <Modalize
          ref={modalAddApi}
          closeOnOverlayTap={false}
          closeSnapPointStraightEnabled={false}
          modalHeight={100}>
          <InputText
            title="Endpoint Application"
            required
            defaultText={endpoint}
            onChange={val => setEndpoint(val)}
            placeholder="http://151.106.112.32:8282"
            onSubmitEditing={() => handleSubmitEndpoint()}
          />
        </Modalize>
      </Portal>
    </>
  );
};

export default React.memo(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'flex-end',
    flex: 1,
  },
  button: {},
  text: {
    fontSize: 18,
    color: 'white',
  },
});
