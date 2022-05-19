import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function BoredApi({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.boredapi.com/api/activity/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function reloadApi(){
    fetch('https://www.boredapi.com/api/activity/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function renderPrice(){
      if (data.price == 0) {
        return(
          <Text style={styles.gratis}>Gratis</Text>
        )
      }
      else {
        return(
        <Text style={styles.noEGratis}>${data.price}</Text>
        )
      }
  }

  return (
    <View style={styles.container}>
      {isLoading ? <Text style={styles.cargandoRey}>Cargando...</Text> :
      ( 
        <View style={styles.container}>
          <Text style={styles.titleFont}>{data.activity}</Text>
          <Text style={styles.descriptionFont}>{data.type}</Text>
          <Text style={styles.detailFont}>Participantes: {data.participants}</Text>
          <Text style={styles.detailFont}>Accesibilidad: {data.accessibility}</Text>
          { renderPrice() }
          <FlatList 
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}</Text>
            )}
          />
          <Button
            title='Nueva Actividad'
            onPress={reloadApi}
          />
          
          <Button
            title="Ir a la home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 50
  },
  titleFont:{
    fontSize: 30
  },
  descriptionFont:{
    marginBottom:10,
    fontSize: 20
  },
  detailFont:{
    fontSize:16,
    paddingVertical:5
  },
  gratis:{
    color: '#02bf05'
  },
  noEGratis:{
    color: '#d92809'
  },
  cargandoRey:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a134eb',
    fontSize: 40
  }
})