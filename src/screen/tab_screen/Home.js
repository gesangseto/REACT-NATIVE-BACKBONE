/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
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
} from '../../assets';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import {SliderBox} from 'react-native-image-slider-box';
const Tab = createBottomTabNavigator();

const Home = ({route, navigation}) => {
  const [dataSlide, setDataSlide] = useState([avatar_2, avatar_3, avatar_4]);
  useEffect(() => {});
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* PROFILE CARD */}
        <View style={{marginVertical: 5}}>
          <SliderBox
            images={dataSlide}
            sliderBoxHeight={150}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            autoplay
            circleLoop
            onCurrentImagePressed={index =>
              console.log(`image ${index} pressed`)
            }
            currentImageEmitter={index =>
              console.log(`current pos is: ${index}`)
            }
          />
        </View>
        {/* CONFIG CARD */}
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.text_header}>Administrator</Text>
          </View>
          <View style={styles.card_body}>
            <TouchableOpacity style={styles.menu_body}>
              <IconMat name="logout" size={20} color={'grey'} />
              <Text>User</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu_body}>
              <IconMat name="logout" size={20} color={'grey'} />
              <Text>Department</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu_body}>
              <IconMat name="logout" size={20} color={'grey'} />
              <Text>Section</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card_body}>
            <TouchableOpacity style={styles.menu_body}>
              <IconMat name="logout" size={20} color={'grey'} />
              <Text>Roles</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* OTHER CARD */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);

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
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
  },
  card_header: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card_body: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  menu_body: {
    alignContent: 'center',
    alignItems: 'center',
    width: '30%',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    elevation: 2,
  },
  text_header: {
    fontWeight: 'bold',
  },
});
