import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './AppTextInput.Style';

export default function AppTextInput({
  icon,
  width = '90%',
  textAlign = 'center',
  style,
  ...otherProps
}) {

  return (
    <View style={[styles.container, {width}, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          style={styles.icon}
          color="#6e6969">
          </MaterialCommunityIcons>
      )}
      <TextInput style= {[styles.textInput, {textAlign} ]} {...otherProps} />
    </View>
  );
}