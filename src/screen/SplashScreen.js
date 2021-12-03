/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {splash_screen_img} from '../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, [navigation]);

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
