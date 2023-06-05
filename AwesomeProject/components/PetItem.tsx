import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Pet } from '../Types/PetTypes'

type props= {
  pet: Pet,
  key: number
}

function PetItem(props: props) : JSX.Element{
  return (
    <View style={style.container}>
      <View style={style.containerImg}>
      <Image
        style={style.img}
        source={require('../img/perro.jpg')}
      />
      </View>
      <View>
        <Text>{props.pet.name}</Text>
      </View>
    </View>
  )
}

const style= StyleSheet.create({
  container: {
    height: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
    flexDirection: 'row'
  },
  containerImg: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
    
  },
});

export default PetItem