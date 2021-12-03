import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {splash_screen_img} from '../assets';

const splash_screen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 500);
  }, []);

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

// Define some colors and default sane values
const utils = {
  colors: {primaryColor: '#af0e66'},
  dimensions: {defaultPadding: 12},
  fonts: {largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12},
};

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

export default React.memo(splash_screen);
