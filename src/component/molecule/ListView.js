import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {avatar_1} from '../../assets';

const ListView = props => {
  const {data} = props;
  useEffect(() => {}, []);

  const renderItem = ({item}) => (
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
        {/* {item.status && <Text>{item.status}</Text>} */}
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        // onScrollToTop={() => setHeaderView(true)}
        // onMomentumScrollBegin={() => setHeaderView(false)}
        // contentContainerStyle={{paddingBottom: 60}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default React.memo(ListView);

const styles = StyleSheet.create({
  container_list: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginVertical: 2,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 5,
    margin: 15,
  },
  image: {
    // borderRadius: 50,
    width: 75,
    height: 75,
  },
  container_text: {
    flex: 1,
    flexWrap: 'wrap',
  },
});
