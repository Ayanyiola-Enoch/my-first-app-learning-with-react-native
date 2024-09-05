import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
      <Text>_layout</Text>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page:{
    flex:1, 
    paddingTop:40,
    backgroundColor:'#fff',
    paddingHorizontal:20,
  }
})