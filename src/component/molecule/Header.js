import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = props => {
  const {onBack, onSearch} = props;
  useEffect(() => {}, []);

  const handlePressBack = () => {
    if (onBack) {
      onBack();
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
              <IconMat name="arrow-left" size={35} color={'black'} />
            </TouchableOpacity>
          )}
          {props.useSearch && (
            <TouchableOpacity onPress={() => onPressBack()}>
              <IconMat name="arrow-left" size={35} color={'black'} />
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
    flex: 0.7,
  },
  body: {
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
  },
});

export default React.memo(Header);
