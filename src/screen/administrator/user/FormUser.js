/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Header, InputText, SelectOption, Switch} from '../../../component';
import {getDepartment, getSection} from '../../../resource';
const Tab = createBottomTabNavigator();

const FormUser = ({route, navigation}) => {
  // const route = useRoute();
  const body = route.params.item;
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [param, setParam] = useState(body ?? {});
  const [listSection, setListSection] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);

  const getListDepartment = async data => {
    let _temp = await getDepartment({param: data});
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

  const getListSection = async data => {
    console.log(data);
    let _temp = await getSection({params: data});
    if (_temp) {
      let _data = [];
      for (const it of _temp) {
        _data.push({
          id: it.section_id,
          label: it.section_name,
        });
      }
      setListSection([..._data]);
    }
  };

  const handleChangeDepartment = val => {
    setParam({...param, department_id: val});
    let query = {department_id: val};
    getListSection(query);
  };
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      (async function () {
        getListDepartment();
      })();
      if (Object.keys(param).length > 0) {
        (async function () {
          getListSection({section_id: param.section_id});
        })();
      }
    }
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
          <SelectOption
            required
            selected={param.department_id}
            options={listDepartment}
            title="Department"
            onChange={val => handleChangeDepartment(val)}
          />
          <SelectOption
            required
            selected={param.section_id}
            options={listSection}
            title="Section"
            onChange={val => console.log(val)}
          />
          <Switch
            title="Status"
            isOn={param.status}
            onChange={val =>
              setParam({...param, status: val ? 1 : 0})
            }></Switch>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormUser;

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
