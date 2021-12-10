/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  avatar_1,
  avatar_2,
  avatar_3,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
  avatar_8,
} from '../../../assets';
import IconMat from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const FormUser = ({route, navigation}) => {
  const [avatar, setAvatar] = useState(avatar_1);
  const [profile, setProfile] = useState({});

  const handlePressLogout = async () => {
    await AsyncStorage.removeItem('profile');
    await AsyncStorage.removeItem('menu');
    navigation.replace('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* PROFILE CARD */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            {avatar != '' && (
              <Image style={styles.imageAvatar} source={avatar} />
            )}
          </View>
          <View style={styles.list_card}>
            <Text>Fullname</Text>
            <Text>Gesang Aji Seto</Text>
          </View>
          <View style={styles.list_card}>
            <Text>Email</Text>
            <Text>gesangseto@gmail.com</Text>
          </View>
          <View style={styles.list_card}>
            <Text>Phone</Text>
            <Text>0821 2222 2657</Text>
          </View>
        </View>
        {/* CONFIG CARD */}
        <View style={styles.card}>
          <View style={styles.list_card}>
            <Text>App Name</Text>
            <Text>BACK BONE</Text>
          </View>
          <View style={styles.list_card}>
            <Text>Owner</Text>
            <Text>PT. TI ATI</Text>
          </View>
        </View>
        {/* OTHER CARD */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.btn_card}>
            <IconMat name="info" size={20} color={'grey'} />
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_card}
            onPress={() => handlePressLogout()}>
            <IconMat name="logout" size={20} color={'grey'} />
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FormUser);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageAvatar: {
    borderRadius: 50,
    width: 75,
    height: 75,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  card: {
    marginBottom: 20,
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
  },
  list_card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  btn_card: {
    flex: 1,
    borderRadius: 10,
    height: 30,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d4d4d4',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
