import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default function Notification() {
  const [items, setItems] = React.useState([
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
    {
      name: 'Transfer',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Release',
    },
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Activated',
    },
    {
      name: 'Picking',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
    {
      name: 'Transfer',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Release',
    },
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Activated',
    },
    {
      name: 'Picking',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
    {
      name: 'Transfer',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Release',
    },
    {
      name: 'Pre-Inbound',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Activated',
    },
    {
      name: 'Picking',
      created_date: new Date(),
      created_by_name: 'Super Admin',
      status_name: 'Pending Work',
    },
  ]);

  const renderMenuItem = item => {
    return (
      <View style={[styles.itemContainer, {backgroundColor: '#7f8c8d'}]}>
        <View style={[styles.header, {backgroundColor: '#7f8c8d'}]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{backgroundColor: 'black', padding: 5, borderRadius: 5}}>
            <Text style={styles.itemCode}>{item.status_name}</Text>
          </View>
        </View>
        <Text style={styles.itemCode}>{item.created_by_name}</Text>
        <Text style={styles.itemTime}>{item.created_date.toString()}</Text>
      </View>
    );
  };
  return (
    <FlatGrid
      itemDimension={300}
      data={items}
      style={styles.gridView}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({item}) => renderMenuItem(item)}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 40,
    flex: 1,
  },
  itemContainer: {
    // justifyContent: 'flex-end',

    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    height: 100,
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemTime: {
    fontWeight: '400',
    fontSize: 10,
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
