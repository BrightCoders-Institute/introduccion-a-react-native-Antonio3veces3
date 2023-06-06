import React from 'react';
import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Pet} from '../Types/PetTypes';

type props = {
  pet: Pet;
  key: number;
};

function PetItem(props: props): JSX.Element {
  const onClickDelete = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={style.container}>
      <View style={style.containerImg}>
        <Image style={style.imgPet} source={require('../img/perro.jpg')} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.petName}>{props.pet.name}</Text>
        <Text style={style.birth}>Brith: {props.pet.birth}</Text>
        <Text style={style.owner}>Owner: {props.pet.owner}</Text>
      </View>
      <View>
        <Pressable onPress={onClickDelete}>
          <Image
            style={style.iconDelete}
            source={require('../img/deleteIcon.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 15,
    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: '#E7EBEF',
    alignItems: 'center',
  },
  containerImg: {
    marginLeft: 10,
  },
  imgPet: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  petName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#365940',
  },
  birth: {
    fontSize: 14,
  },
  owner: {
    marginTop: 3,
    fontSize: 14,
  },
  iconDelete: {
    height: 35,
    width: 35,
    marginLeft: 30,
  },
});

export default PetItem;
