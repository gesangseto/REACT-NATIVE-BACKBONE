import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
function SelectOption(props) {
  const {onChange, options, title, selected, required, readonly} = props;
  const [select, setSelect] = useState(selected);
  const [isRead, setIsRead] = useState(readonly ? true : false);

  const handleChange = val => {
    setSelect(val);
    onChange(val);
  };

  return (
    <View>
      <Text style={styles.title}>
        {title} <Text style={{color: 'red'}}>{required ? ' *' : ''}</Text>
      </Text>
      <SelectPicker
        // containerStyle={{ backgroundColor: "gray" }}
        doneButtonTextStyle={{
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: 14,
        }}
        disabled={isRead}
        selected={parseInt(select)}
        onValueChange={value => {
          handleChange(value);
        }}
        placeholder={'--Select--'}
        style={styles.content}>
        {Object.values(options).map((val, index) => (
          <SelectPicker.Item label={val.label} value={val.id} key={index + 1} />
        ))}
      </SelectPicker>
    </View>
  );
}

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
});
