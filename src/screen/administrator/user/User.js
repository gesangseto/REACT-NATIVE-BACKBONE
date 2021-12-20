/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header, ListView, ListViewSwipe} from '../../../component';
import {deleteUser, getUser} from '../../../resource';
const Tab = createBottomTabNavigator();

const User = ({route, navigation}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [param, setParam] = useState({});

  const get_data = async () => {
    let _data = await getUser({params: param});
    setListData(_data);
    return;
  };

  const handleDelete = async item => {
    console.log(item);
    setIsLoading(true);
    await deleteUser({params: item});
    setIsLoading(false);
  };

  useEffect(() => {
    if (initialLoad)
      (async function () {
        setIsLoading(true);
        await get_data();
        setIsLoading(false);
        setInitialLoad(false);
      })();
    // console.log(menu);
  }, [initialLoad]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        isLoading={isLoading}
        useBack={true}
        onBack={() => navigation.goBack()}
        useSearch={true}
        onSearch={val => console.log(val)}
        useAdd={true}
        onAdd={val =>
          navigation.navigate('/administrator/user/form', {item: val})
        }
      />
      <ListViewSwipe
        data={listData}
        onDelete={val => handleDelete(val)}
        onPress={val =>
          navigation.navigate('/administrator/user/form', {item: val})
        }></ListViewSwipe>
    </SafeAreaView>
  );
};

export default React.memo(User);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
