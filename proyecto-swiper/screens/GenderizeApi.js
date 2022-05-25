import { View, Text, Button  } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import axios from "axios";
export default function GenderizeApi({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const onChangeSearch = (query) => setSearchQuery(query);
  

  const ApiCall = async() => {
    console.log(searchQuery)
    const response = await axios.get('https://api.genderize.io/?name='+searchQuery)
    setData(response.data)
    console.log(response.data)
  }

  // async function ApiCallName(){
  //   try {
  //       const response = await axios
  //       .get('https://api.genderize.io/?name='+searchQuery)
  //       .then((json) => setData(json))
  //       console.log(response);
  //   } catch (error) {
  //       console.error(error);
  //   }
  // }


  return (
    <View>  
      <Text> GenderizeApi </Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button
        onPress={ApiCall}
        title="Mostrar Valor"
      />
      <Text> {data.count} </Text>
      <Text> {data.gender} </Text>
      <Text> {data.male} </Text>
      <Text> {data.name} </Text>
      <Text> {data.probability} </Text>
    </View>
  );
}
