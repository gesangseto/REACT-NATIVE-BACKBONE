import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = props => {
  const {onBack, onSearch, onSubmit, onAdd} = props;

  const [searchText, setSearchText] = useState('');

  useEffect(() => {}, []);

  const handlePressBack = () => {
    if (onBack) {
      onBack();
    }
  };
  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };
  const handlePressSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  const handlePressAdd = () => {
    if (onAdd) {
      onAdd();
    }
  };
  return (
    <>
      {props.isLoading && (
        <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={{color: '#FFF'}}
        />
      )}
      <View style={styles.container}>
        <View style={styles.body}>
          {props.useBack && (
            <TouchableOpacity onPress={() => handlePressBack()}>
              <IconMat name="arrow-left" size={25} color={'black'} />
            </TouchableOpacity>
          )}
          {props.headerTitle && (
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {props.headerTitle}
            </Text>
          )}
          {props.useSearch && (
            <View style={styles.search_section}>
              <TextInput
                style={styles.search_input}
                placeholder="Search..."
                onChangeText={text => setSearchText(text)}
                onSubmitEditing={() => handleSearch()}
                underlineColorAndroid="transparent"
              />
              <IconMat
                style={{padding: 10}}
                name="magnify"
                size={20}
                color="#000"
              />
            </View>
          )}
          {props.useSubmit && (
            <TouchableOpacity onPress={() => handlePressSubmit()}>
              <IconMat name="send" size={25} color={'green'} />
            </TouchableOpacity>
          )}
          {props.useAdd && (
            <TouchableOpacity onPress={() => handlePressAdd()}>
              <IconMat name="plus-circle-outline" size={25} color={'green'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
// }

const styles = StyleSheet.create({
  container: {
    height: 45,
    padding: 3,
    justifyContent: 'center',
  },
  body: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
  },
  search_section: {
    elevation: 3,
    flex: 1,
    marginHorizontal: 10,
    // marginVertical: 2,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  search_input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default React.memo(Header);
