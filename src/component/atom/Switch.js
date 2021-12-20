import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const Switch = React.forwardRef((props, ref) => {
  const {title, required, readOnly, onChange} = props;
  const [text, setText] = useState('');
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (props.isOn) {
      setIsOn(props.isOn);
    }
  }, [props]);

  const handleChange = () => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <View>
      <Text style={styles.title}>
        {title}
        <Text style={{color: 'red'}}>{required ? ' *' : ''}</Text>
      </Text>
      <ToggleSwitch
        style={{marginLeft: 15, marginVertical: 5}}
        isOn={isOn}
        onColor="green"
        offColor="grey"
        size="medium"
        onToggle={val => handleChange()}
      />
    </View>
  );
});

export default React.memo(Switch);

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
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 2,
    borderWidth: 0.2,
  },
});
