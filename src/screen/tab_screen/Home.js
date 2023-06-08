import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Example() {
  const [items, setItems] = React.useState([
    {
      name: 'Pre-Inbound',
      code: '#1abc9c',
      icon: <IconMat name="home" size={30} color={'grey'} />,
    },
    {name: 'Transfer', code: '#2ecc71'},
    {name: 'Picking List', code: '#7f8c8d'},
    {name: 'Return', code: '#3498db'},
    {name: 'Packing', code: '#9b59b6'},
    {name: 'Re-Pack', code: '#34495e'},
    {name: 'Aggregation', code: '#16a085'},
    {name: 'Re-Aggregation', code: '#16a085'},
    {name: 'Splitting', code: '#27ae60'},
    {name: 'Merging', code: '#2980b9'},
    {name: 'Commision', code: '#8e44ad'},
    {name: 'De-Commission', code: '#2c3e50'},
    {name: 'Disposal', code: '#f1c40f'},
    {name: 'Sampling', code: '#e67e22'},
  ]);

  const renderMenuItem = item => {
    return (
      <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
        {item.icon}
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
      </View>
    );
  };
  return (
    <FlatGrid
      itemDimension={130}
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
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
