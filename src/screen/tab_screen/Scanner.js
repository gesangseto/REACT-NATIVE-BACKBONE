/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

const Scanner = ({route, navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Ready to scan !</Text>
    </View>
  );
};

export default React.memo(Scanner);
