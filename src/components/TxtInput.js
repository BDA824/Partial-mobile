import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TxtInput = ({label, content}) => {
  
  return (
    <TextInput
      label={label}
      value={content}
      onChangeText={text => setText(text)}
      style={styles.container}
      disabled='True'
    />
  );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 25
    }
})
export default TxtInput;