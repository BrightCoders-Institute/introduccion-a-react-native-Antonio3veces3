/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text
} from 'react-native';
import PetList from './components/PetList';
const Pets= [
  {
    name: "Bailey",
    birth: 2018,
    owner: "Tony"
  },
  {
    name: "Simba",
    birth: 2022,
    owner: "Tony"
  },
  {
    name: "Pirata",
    birth: 2016,
    owner: "Tony"
  }
]
function App(): JSX.Element {
  const [petList, setPetList] = useState(Pets);

  return (
    <ScrollView>
      <Text>Welcome to Veterinary</Text>
      <Button
        title='Add pet'
      />
      
      <View>
        <PetList list={petList}/>
      </View>     
    </ScrollView>
  );
}

export default App;
