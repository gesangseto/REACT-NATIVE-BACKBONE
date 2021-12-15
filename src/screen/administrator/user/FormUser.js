/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Header, InputText, SelectOption} from '../../../component';
import {getDepartment} from '../../../resource';
const Tab = createBottomTabNavigator();

const FormUser = ({route, navigation}) => {
  // const route = useRoute();
  const body = route.params.item;
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [param, setParam] = useState(body ?? {});
  const [listSection, setListSection] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);

  const getListDepartment = async () => {
    console.log('tessadat');
    let _temp = await getDepartment({});
    console.log('===========================');
    console.log(_temp);
    if (_temp) {
      let _data = [];
      for (const it of _temp) {
        _data.push({
          id: it.department_id,
          label: it.department_name,
        });
      }
      setListDepartment([..._data]);
    }
  };
  // const getListSection = async () => {
  //   await getSection();
  // };
  useEffect(() => {
    if (initialLoad && listDepartment.length == 0) {
      (async function () {
        getListDepartment();
      })();
    }
    console.log('test');
  }, [initialLoad]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        isLoading={isLoading}
        headerTitle={'USER'}
        useBack={true}
        onBack={() => navigation.goBack()}
        useSubmit={true}
        onSubmit={() => console.log('Submit')}
      />
      <ScrollView>
        {/* PROFILE CARD */}
        <View style={styles.card}>
          <InputText
            title="Name"
            defaultText={param.user_name}
            onChange={val => setParam({...param, user_name: val})}
          />
          <InputText
            title="Email"
            defaultText={param.user_email}
            onChange={val => setParam({...param, user_email: val})}
          />
          <InputText
            title="Password"
            defaultText={param.user_password}
            onChange={val => setParam({...param, user_password: val})}
          />
          <InputText
            title="Department"
            defaultText={param.department_name}
            onChange={val => setParam({...param, department_name: val})}
          />
          <SelectOption
            required
            selected={param.department_id}
            options={listDepartment}
            title="Department"
            onChange={val => console.log(val)}
          />
          <InputText
            title="Section"
            defaultText={param.section_name}
            onChange={val => setParam({...param, section_name: val})}
          />
          <InputText
            title="Status"
            defaultText={param.status}
            onChange={val => setParam({...param, status: val})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FormUser);

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
    paddingVertical: 10,
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
