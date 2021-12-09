/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {splash_screen_img} from '../assets';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {InputText} from '../component';

const SplashScreen = ({navigation}) => {
  const modalAddApi = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      modalAddApi.current?.open();
      // navigation.navigate('Login');
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

      <Portal>
        <Modalize
          ref={modalAddApi}
          closeOnOverlayTap={false}
          // closeSnapPointStraightEnabled={false}
          // modalHeight={isKeyboardOpen ? 400 : 225}
          // modalHeight={250}
          // modalStyle={{ backgroundColor: colors.bg.light_grey }}
        >
          <InputText
            title="Endpoint Application"
            required
            placeholder="http://151.106.112.32:82"
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
