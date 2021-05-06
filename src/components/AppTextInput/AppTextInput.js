import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './AppTextInput.Style';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function AppTextInput({
  icon,
  width = WINDOW_WIDTH-80,
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