/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import {avatar_2, avatar_3, avatar_4} from '../../assets';
import {getMenu} from '../../resource';
const Tab = createBottomTabNavigator();

const Home = ({route, navigation}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [dataSlide, setDataSlide] = useState([avatar_2, avatar_3, avatar_4]);
  const [menu, setMenu] = useState([]);
  const [profile, setProfile] = useState([]);

  const get_menu = async () => {
    let _profile = JSON.parse(await AsyncStorage.getItem('profile'));
    let _menu = await getMenu({params: _profile});
    await AsyncStorage.setItem('menu', JSON.stringify(_menu));
    setMenu(_menu);
    setProfile(_profile);
  };

  useEffect(() => {
    if (initialLoad)
      (async function () {
        let _menu = await AsyncStorage.getItem('menu');
        if (!_menu) {
          get_menu();
        } else {
          setMenu(JSON.parse(_menu));
        }
        setInitialLoad(false);
      })();
    console.log(menu);
  }, [menu, initialLoad]);

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

        {menu &&
          menu.length > 0 &&
          menu.map((item, index) => {
            if (item._tag === 'CSidebarNavDropdown') {
              return (
                <View key={index} style={styles.card}>
                  <View style={styles.card_header}>
                    <Text style={styles.text_header}>{item.name}</Text>
                  </View>
                  <View style={styles.card_body}>
                    {item._children &&
                      item._children.length > 0 &&
                      item._children.map((child, c_index) => {
                        return (
                          <TouchableOpacity
                            key={`${index}${c_index}`}
                            style={styles.menu_body}
                            onPress={() => console.log(child.to)}>
                            <IconMat name="logout" size={20} color={'grey'} />
                            <Text>{child.name}</Text>
                          </TouchableOpacity>
                        );
                      })}
                  </View>
                </View>
              );
            } else {
              return null;
            }
          })}
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
    marginVertical: 5,
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
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  menu_body: {
    alignContent: 'center',
    alignItems: 'center',
    width: '30%',
    padding: 5,
    marginVertical: 2,
    borderRadius: 10,
    elevation: 2,
  },
  text_header: {
    fontWeight: 'bold',
  },
});
