/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import PetList from './components/PetList';
const Pets = [
  {
    name: 'Bailey',
    birth: 2018,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'  
  },
  {
    name: 'Simba',
    birth: 2022,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
  {
    name: 'Pirata',
    birth: 2016,
    owner: 'Antonio Ramirez',
    img: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'
  },
];
function App(): JSX.Element {
  const [petList, setPetList] = useState(Pets);

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image 
        style= {style.logoImg}
          source={require('./img/logo_veterinary.svg.png')}
        />
      </View>

      <Pressable style={style.button}
        onPress={()=>{Alert.alert("Create new pet", "Form to create pet")}}
      >
        <Text style={style.btnText}>Add new pet</Text>
      </Pressable>

      <View style={style.containerList}>
      <PetList list={petList} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  logoImg: {
    width: 140,
    height:140,
    borderRadius:50,
    alignSelf: 'center'
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
  containerList:{
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: '72%'
  }
});

export default App;
