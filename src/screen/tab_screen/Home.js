/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import {Header} from '../../component';
const Tab = createBottomTabNavigator();

const Home = ({route, navigation}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSlide, setDataSlide] = useState([avatar_2, avatar_3, avatar_4]);
  const [menu, setMenu] = useState([]);

  const get_menu = async () => {
    let _profile = JSON.parse(await AsyncStorage.getItem('profile'));
    let _menu = await getMenu({params: _profile});
    await AsyncStorage.setItem('menu', JSON.stringify(_menu));
    setMenu(_menu);
    return;
  };

  useEffect(() => {
    if (initialLoad)
      (async function () {
        setIsLoading(true);
        let _menu = await AsyncStorage.getItem('menu');
        if (!_menu) {
          await get_menu();
        } else {
          setMenu(JSON.parse(_menu));
        }
        setIsLoading(false);
        setInitialLoad(false);
      })();
    // console.log(menu);
  }, [initialLoad]);

  const handlePressMenu = to => {
    console.log('To: ', to);
    navigation.navigate(to);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        isLoading={isLoading}
        // useBack={true}
        // onBack={() => console.log('onBack')}
        useSearch={true}
        onSearch={val => console.log(val)}
        // useSubmit={true}
        // onSubmit={() => console.log('submit')}
      />
      <ScrollView>
        {/* PROFILE CARD */}
        <View style={{marginVertical: 0}}>
          <SliderBox
            images={dataSlide}
            sliderBoxHeight={120}
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
                          <View
                            key={`${index}.${c_index}`}
                            style={styles.menu_body}>
                            <TouchableOpacity
                              style={styles.menu}
                              onPress={() => handlePressMenu(child.to)}>
                              <IconMat
                                name={child.icon_android}
                                size={20}
                                color={'grey'}
                              />
                            </TouchableOpacity>
                            <Text style={{fontSize: 10, color: 'black'}}>
                              {child.name}
                            </Text>
                          </View>
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
    backgroundColor: 'white',
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
    // elevation: 1,
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
  menu: {
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginVertical: 2,
    borderRadius: 10,
    // elevation: 2,
    borderColor: 'black',
    borderWidth: 1,
  },
  menu_body: {
    alignContent: 'center',
    alignItems: 'center',
    width: '22%',
  },
  text_header: {
    fontWeight: 'bold',
    color: 'black',
  },
});
