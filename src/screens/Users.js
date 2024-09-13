import axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import CardUser from '../components/CardUser';

export default function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const useAPI = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/broker/api/v1/users/')
        setData(response.data)
        setLoading(false)
      }
      catch (error) {
        console.log(error)
      }
    }

    useAPI()
  }, []
  )

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView>
      {data.map((user) => (
        <CardUser
          key={user.id}
          id={user.id}
          name={user.name}
          country={user.country}
        />
      ))}
    </ScrollView>
  );
}