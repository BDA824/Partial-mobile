import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Main() {
  return (
    <View style={style.container}>
      <Text>Welcome to InvertCoin</Text>
    </View>
  );
}

const style = StyleSheet.create(
  {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      fontSize: 28,
    }
  }
)