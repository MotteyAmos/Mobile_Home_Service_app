import React, { Component } from 'react'
import { Text, View , FlatList} from 'react-native'
import PostCard from '@/components/home/PostCard'
export default function Posts(){


    return(
        <FlatList
        data={[{ key: 'item1' }, { key: 'item2' }, { key: 'item3' }]}
        renderItem={({ item }) =><PostCard/>}
        bounces={false} // Disable overscroll effect
        keyExtractor={(item) => item.key}
      />
    )
}
