import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = React.forwardRef((props, ref) => {
  const {
    numeric,
    max,
    title,
    defaultText,
    required,
    readOnly,
    upperCase,
    onChange,
    onSubmitEditing,
  } = props;
  const [maxLength, setMaxLength] = useState();
  const [text, setText] = useState('');

  useEffect(() => {
    if (max) {
      setMaxLength(max);
    }
    if (defaultText) {
      setText(defaultText);
    }
  }, [defaultText]);

  const handleChange = val => {
    var value = val;
    if (numeric) {
      value = val.replace(/[^0-9]/g, '');
    }
    setText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <View>
      <Text style={styles.title}>
        {title}
        <Text style={{color: 'red'}}>{required ? ' *' : ''}</Text>
      </Text>
      <TextInput
        ref={ref}
        maxLength={maxLength}
        editable={readOnly ? false : true}
        autoCapitalize={upperCase ? 'characters' : 'none'}
        keyboardType={numeric ? 'numeric' : 'default'}
        underlineColorAndroid="transparent"
        value={text}
        onChangeText={val => {
          handleChange(val);
        }}
        style={styles.content}
        {...props}
      />
    </View>
  );
});

export default React.memo(InputText);

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
    height: 40,
    backgroundColor: '#f7f7f7',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0,
  },
});
