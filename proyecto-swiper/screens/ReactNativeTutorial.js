import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react';

export default function ReactNativeTutorial({ navigation }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleFont}>{data.title}</Text>
            <Text style={styles.descriptionFont}>{data.description}</Text>
            <FlatList 
                data={data.movies}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.title}, {item.releaseYear}</Text>   
                )}
            />
            <Button
                title="Ir a la home"
                onPress={() => navigation.navigate('Home')}
            />
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