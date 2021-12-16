import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
function SelectOption(props) {
  const {onChange} = props;
  const [list, setList] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  const handleChange = val => {
    setSelectedData(val);
    if (onChange) {
      onChange(val);
    }
  };

  useEffect(() => {
    if (list.length == 0 && props.options.length > 0) {
      setList(props.options);
    } else if (props.selected) {
      setSelectedData(props.selected);
    }
    console.log('Selected ', selectedData);
  }, [props, list, selectedData]);

  return (
    <View>
      <Text style={styles.title}>
        {props.title}
        <Text style={{color: 'red'}}>{props.required ? ' *' : ''}</Text>
      </Text>
      <SelectPicker
        style={styles.content}
        disabled={props.isRead}
        selected={list.length > 0 && selectedData ? selectedData : null}
        onValueChange={value => {
          handleChange(value);
        }}
        placeholder={'--Select--'}>
        {Object.values(list).map((val, index) => (
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
    borderRadius: 2,
    borderWidth: 0.2,
  },
});
