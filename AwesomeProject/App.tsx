/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import PetList from './components/PetList';
const Pets = [
  {
    name: 'Bailey',
    birth: 2018,
    owner: 'Tony',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'  
  },
  {
    name: 'Simba',
    birth: 2022,
    owner: 'Tony',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Tony',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
];
function App(): JSX.Element {
  const [petList, setPetList] = useState(Pets);

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Veterinary</Text>

      <Pressable style={style.button}>
        <Text style={style.btnText}>Add new pet</Text>
      </Pressable>

      <PetList list={petList} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#34987A',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '40%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;
