import {StyleSheet, Dimensions} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      top: 136,
      backgroundColor: '#FFFFFF',
      borderRadius: 24,
      flexDirection: 'row',
      marginVertical: 18,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    textInput: {
      color: '#0c0c0c',
      fontSize: 14,
      width: WINDOW_WIDTH-120,
      paddingLeft: 20
    },
    icon: {marginRight: -20 },
  });

export default styles;