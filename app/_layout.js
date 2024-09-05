import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
      <Text style>List Class</Text>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page:{
    flex:1, 
    padding:20,
    backgroundColor:'#fff',
    paddingHorizontal:20,
  }
})