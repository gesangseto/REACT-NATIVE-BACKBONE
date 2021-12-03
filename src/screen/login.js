// <ROOT>/App/Views/Login/LoginView.js
import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import IconMatCom from 'react-native-vector-icons/MaterialCommunityIcons';
import {login_bottom, login_top} from '../assets';
import {colors} from '../constants';

const login = ({navigation}) => {
  // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const ref_input_email = useRef();
  const ref_input_password = useRef();
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [parameter, setParameter] = useState({
    email: '',
    password: '',
  });

  const onPressLogin = () => {
    navigation.navigate('home');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <ImageBackground
            source={login_top}
            style={{
              width: null,
              height: '100%',
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View style={styles.containerLogin}>
            {isLoading && (
              <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={{color: '#FFF'}}
              />
            )}
            <Text style={styles.loginText}>LOGIN</Text>
            <TextInput
              ref={ref_input_email}
              style={styles.input}
              value={parameter.email}
              maxLength={256}
              placeholder="Enter username..."
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onChangeText={val => setParameter({...parameter, email: val})}
              underlineColorAndroid="transparent"
              placeholderTextColor="#999"
              onSubmitEditing={() => ref_input_password.current.focus()}
              blurOnSubmit={false}
            />
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                marginHorizontal: 15,
                marginBottom: 10,
              }}>
              <TextInput
                ref={ref_input_password}
                style={{
                  width: '85%',
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 8,
                }}
                value={parameter.password}
                maxLength={40}
                placeholder="Enter password..."
                onChangeText={val =>
                  setParameter({...parameter, password: val})
                }
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                secureTextEntry={!visiblePassword}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
                onSubmitEditing={() => onPressLogin()}
              />

              <TouchableOpacity
                style={{marginRight: 5}}
                onPress={() => setVisiblePassword(!visiblePassword)}>
                {!visiblePassword ? (
                  <IconMatCom
                    name="eye-off-outline"
                    size={25}
                    color={'grey'}
                    style={{justifyContent: 'center'}}
                  />
                ) : (
                  <IconMatCom
                    name="eye-outline"
                    size={25}
                    color={'grey'}
                    style={{justifyContent: 'center'}}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={onPressLogin}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            {!initialLoad && !isRegistered && (
              <Text style={{color: 'red', textAlign: 'center'}}>
                This device not registered for this application
              </Text>
            )}
            {!initialLoad && !isRegistered && (
              <Text
                style={{color: 'red', textAlign: 'center', paddingBottom: 10}}>
                ID : {getUniqueId()}
              </Text>
            )}
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <ImageBackground
            source={login_bottom}
            style={{
              width: null,
              height: '105%',
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
  containerLogin: {
    zIndex: 2,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: colors.bg.light_grey,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.app.theme,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  loginButton: {
    height: 40,
    marginHorizontal: 30,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.app.theme,
  },
  loginButtonText: {
    color: 'white',
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: 'bold',
  },
});

export default React.memo(login);
