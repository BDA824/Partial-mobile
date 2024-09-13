import { StyleSheet, Text, View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import TxtInput from '../components/TxtInput';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Countrys({ route }) {

  const { userID } = route.params || {};
  const [userData, setUserData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const useAPI = async () => {

      if (!userID) {
        Alert.alert('Error', 'No se ha seleccionado ningún usuario.');
        navigation.navigate('Users');
        return;
      }

      try {
        const URL = `http://127.0.0.1:8000/broker/api/v1/users/${userID}`;
        const response = await axios.get(URL)
        setUserData(response.data);
        console.log(URL)
      }
      catch (error) {
        console.log(error)
      }
    }

    useAPI()
  }, [userID]
  )
  return (
    <View>
      <TxtInput label={'Name'} content={userData.name} />
      <TxtInput label={'Email'} content={userData.mail} />
      <TxtInput label={'Country'} content={userData.country} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  }
})