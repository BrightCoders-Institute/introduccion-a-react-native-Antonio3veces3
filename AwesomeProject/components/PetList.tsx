import React from 'react'
import {FlatList, Text, ScrollView } from 'react-native';
import { Pet} from '../Types/PetTypes'
import PetItem from './PetItem';

type PetList= {
  list: Array<Pet>
}

function PetList(props: PetList): JSX.Element {
  return (
    <ScrollView>
        <FlatList 
            data={props.list}
            renderItem={(item)=> <PetItem pet={item.item} key={item.index} />}
        />
    </ScrollView>
  )
}

export default PetList;