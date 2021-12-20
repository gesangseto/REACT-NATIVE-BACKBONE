import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import {avatar_1} from '../../assets';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ModalAlert} from '..';

const ListViewSwipe = props => {
  const {data, onDelete, onPress} = props;
  const [selectedData, setSelectedData] = useState({});

  const [alertDelete, setAlertDelete] = useState(false);

  useEffect(() => {}, []);

  const handlePressDelete = item => {
    setSelectedData(item);
    setAlertDelete(true);
  };
  const handleConfirmDelete = () => {
    setAlertDelete(!alertDelete);
    if (onDelete) {
      onDelete(selectedData);
    }
  };

  const handlePressList = item => {
    if (onPress) {
      onPress(item);
    }
    console.log('onPress', item);
  };

  const renderItem = (item, rowMap) => (
    <TouchableHighlight onPress={() => handlePressList(item)}>
      <View style={styles.container_list}>
        <Image style={styles.image} source={avatar_1} />
        <View style={styles.container_text}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            {item.user_email}
          </Text>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 'normal'}}>
            {item.user_name}
          </Text>
          <Text>{item.section_name}</Text>
          <Text>{item.department_name}</Text>
          {item.status ? (
            <Text style={{color: 'green'}}>Active</Text>
          ) : (
            <Text style={{color: 'red'}}>Inactive</Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (item, rowMap) => (
    <View style={styles.container_hidden_list}>
      <TouchableOpacity
        onPress={() => handlePressDelete(item)}
        style={styles.delete_btn_hidden_list}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
          }}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <SwipeListView
        data={data}
        renderItem={(data, rowMap) => renderItem(data.item, rowMap)}
        renderHiddenItem={(data, rowMap) => renderHiddenItem(data.item, rowMap)}
        leftOpenValue={75}
        // rightOpenValue={-75}
      />
      <ModalAlert
        show={alertDelete}
        onConfirm={() => handleConfirmDelete()}
        onClose={() => setAlertDelete(!alertDelete)}></ModalAlert>
    </View>
  );
};

export default React.memo(ListViewSwipe);

const styles = StyleSheet.create({
  container_list: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  image: {
    // borderRadius: 50,
    margin: 5,
    width: 75,
    height: 75,
  },
  container_text: {
    flex: 1,
    flexWrap: 'wrap',
  },
  container_hidden_list: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
  },
  delete_btn_hidden_list: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 75,
  },
});
