import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Octicons';

const SelectOption = (props, ref) => {
  const {onChange, options, title, selected, required, readonly} = props;
  const [optionSearch, setOptionSearch] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [selectText, setSelectText] = useState('');
  const [selectValue, setSelectValue] = useState(props.selected);
  const [isRead, setIsRead] = useState(readonly ? true : false);

  const handlePressItem = item => {
    setSelectText(item.label);
    setSelectValue(item.id);
    setModalVisible(!isModalVisible);
    setTextSearch('');
    if (onChange) {
      onChange(item.id);
    }
  };
  const handleCloseModal = item => {
    setTextSearch('');
    setModalVisible(false);
  };

  const handleTypingSearch = text => {
    setTextSearch(text);
    if (textSearch != '') {
      setOptionSearch(find(options, text));
    }
  };

  useEffect(() => {
    if (options.length > 0 && selected) {
      for (const it of options) {
        if (it.id == selected) {
          setSelectValue(it.id);
          setSelectText(it.label);
        }
      }
    }
  }, [options]);

  function find(items, text) {
    text = text.toString().toLowerCase();
    text = text.split(' ');
    return items.filter(function (item) {
      return text.every(function (el) {
        return item.label.toString().toLowerCase().indexOf(el) > -1;
      });
    });
  }

  const renderItem = ({item}) => (
    <>
      {item.id == selected ? (
        <TouchableOpacity
          style={modal.listItemChecked}
          onPress={() => handlePressItem(item)}>
          <Text style={{alignSelf: 'center', justifyContent: 'center'}}>
            {item.label}
          </Text>
          <Icon
            style={{alignSelf: 'center', justifyContent: 'center'}}
            name="check"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={modal.listItem}
          onPress={() => handlePressItem(item)}>
          <Text style={{alignSelf: 'center', justifyContent: 'center'}}>
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );

  return (
    <View>
      {title ? (
        <Text style={styles.title}>
          {title} <Text style={{color: 'red'}}>{required ? ' *' : ''}</Text>
        </Text>
      ) : null}

      {isRead ? (
        <TouchableOpacity
          style={styles.form}
          onPress={() => console.log('INI SUDAH DISABLED')}>
          <View style={{justifyContent: 'center', paddingLeft: 10, height: 40}}>
            <Text>{selectText ? selectText : '--Select--'}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.form}
          onPress={() => setModalVisible(true)}>
          <View style={{justifyContent: 'center', paddingLeft: 10, height: 40}}>
            <Text>{selectText ? selectText : '--Select--'}</Text>
          </View>
        </TouchableOpacity>
      )}

      <Modal
        animationInTiming={100}
        animationOutTiming={100}
        backdropTransitionInTiming={1}
        backdropTransitionOutTiming={1}
        animationOut={'zoomOutUp'}
        animationIn={'zoomInUp'}
        onBackButtonPress={() => handleCloseModal()}
        isVisible={isModalVisible}
        onBackdropPress={() => handleCloseModal()}>
        <View style={modal.viewModal}>
          <Text style={modal.titleText}>{title ?? '--Select--'}</Text>
          <TextInput
            style={modal.searchText}
            placeholder={'Type filter keyword...'}
            value={textSearch}
            onChangeText={val => {
              handleTypingSearch(val);
            }}
          />
          {(textSearch && optionSearch.length == 0) || options.length == 0 ? (
            <Text style={modal.emptySearch}>No Data</Text>
          ) : null}
          <FlatList
            data={textSearch ? optionSearch : options}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            style={{marginBottom: 15}}
          />
        </View>
      </Modal>
    </View>
  );
};

export default React.memo(SelectOption);

const styles = StyleSheet.create({
  title: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    // borderWidth: 1,
  },
  content: {
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginTop: 5,
    borderRadius: 10,
    // borderWidth: 1,
  },
  form: {
    height: 40,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginTop: 5,
    borderWidth: 0.2,
    borderRadius: 2,
  },
});

const modal = StyleSheet.create({
  viewModal: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  titleText: {
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchText: {
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  listItem: {
    // borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
  listItemChecked: {
    // borderWidth: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
  emptySearch: {
    alignSelf: 'center',
    marginVertical: 25,
    color: 'grey',
  },
});
