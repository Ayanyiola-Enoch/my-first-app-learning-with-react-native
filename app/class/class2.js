import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const _layout = () => {

    const contain = ['Home', 'About', 'Projects', 'Contacts','Accounts', 'Achievement','Close']

  return (
    <View style={styles.page}>
      <Text style ={{fontSize:30, fontWeight:'bold', color:'black', marginBottom:20}}>List Class</Text>

    <FlatList 
    data={contain}
    horizontal={true}
    showsHorizontalScrollIndicators={false}
    // numColumns={4}
    // columnWrapperStyle={{justifyContent:'space-between'}}
    renderItem={({item})=>{
        return(
            <TouchableOpacity style={styles.container}>
                <Text style={{fontSize:19, color: 'black'}}>{item}</Text>
            </TouchableOpacity>
        )
    }}
    />

    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page:{
    flex:1, 
    paddingTop:20,
    backgroundColor:'#fff',
    paddingHorizontal: 20,
  },

  container:{
    height:40,
    paddingHorizontal:6,
    borderWidth:1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    marginRight:10
  }
})