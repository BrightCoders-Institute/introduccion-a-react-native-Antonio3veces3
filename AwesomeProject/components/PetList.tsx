import React from 'react';
import {FlatList, Text, ScrollView, StyleSheet} from 'react-native';
import {Pet} from '../Types/PetTypes';
import PetItem from './PetItem';

type PetList = {
  list: Array<Pet>;
};

function PetList(props: PetList): JSX.Element {
  return (
    <FlatList
      style= {style.container}
      data={props.list}
      renderItem={item => <PetItem pet={item.item} key={item.index} />}
    />
  );
}

const style= StyleSheet.create({
  container: {
    width: '95%'
  }
})

export default PetList;
