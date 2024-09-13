import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './Navigation';
import { Provider, DefaultTheme } from 'react-native-paper';

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'black',  // Cambiar colores según tu necesidad
      accent: 'yellow',
    },
  };

  return (
    <Provider theme={theme}>
      <Navigation />
    </Provider>
  );
}
