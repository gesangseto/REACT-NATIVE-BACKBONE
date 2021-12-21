/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header, ListViewSwipe} from '../../../component';
import {deleteUser, getUser} from '../../../resource';
const Tab = createBottomTabNavigator();

const User = ({route, navigation}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [param, setParam] = useState({page: 1, limit: 5});

  const get_data = async () => {
    setIsLoading(true);
    let _param = {page: 1, limit: param.limit};
    let _data = await getUser({params: _param});
    setIsLoading(false);
    setListData(_data);
    return;
  };
  const add_data = async () => {
    setIsLoading(true);
    let _param = {page: param.page + 1, limit: param.limit};
    let _data = await getUser({params: _param});
    setIsLoading(false);
    if (_data.length > 0) {
      let _tmp_data = listData;
      for (const it of _data) {
        _tmp_data.push(it);
      }
      setParam({...param, page: param.page + 1});
      setListData([..._tmp_data]);
    }
    return;
  };

  const handleDelete = async item => {
    console.log(item);
    setIsLoading(true);
    await deleteUser({params: item});
    await get_data();
    setIsLoading(false);
  };

  useEffect(() => {
    if (initialLoad)
      (async function () {
        await get_data();
        setInitialLoad(false);
      })();

    const willFocusSubscription = navigation.addListener('focus', () => {
      (async function () {
        await get_data();
      })();
    });
    return willFocusSubscription;
  }, [initialLoad, navigation, param]);

  const handleRefresh = async () => {
    setParam({...param, page: 1});
    await get_data();
  };

  const handleLoadMore = async () => {
    await add_data();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
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
        onRefresh={() => handleRefresh()}
        onLoadMore={() => handleLoadMore()}
        refreshing={isLoading}
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
