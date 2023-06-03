import React from 'react'
import { View, FlatList, Text } from 'react-native';
import {PetListProps, Pet} from '../Types/PetTypes'

function PetList(props: PetListProps): JSX.Element {
  return (
    <View>
        <FlatList 
            data={props.list}
            renderItem={(item)=> <Text>{item.item.name}</Text>}
        />
    </View>
  )
}

export default PetList;