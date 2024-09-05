import { StyleSheet, Text,Button, View, Image, TextInput, StatusBar } from 'react-native'
import React from 'react'
// import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <View style={styles.page}>
        {/* <StatusBar backgroundColor={'red'}/> */}
        
        <View style={styles.icon}>
            <Image source={require('../assets/images/left.png')} style={{width:20, height:20}}/>
        </View>
      <Text style={{fontSize:21, fontWeight:'300'}}>Create Account</Text>
      <Text style={{color:'grey'}}>Create account and enjoy all services</Text>

      <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderRadius:6, marginTop:30, paddingHorizontal:10, height:44}}>
        <Image source= {require('../assets/images/profile.png')} style={{width:20, height:20}}/>
        <TextInput placeholder='Name' style={{marginLeft:7}}/>
      </View>
      <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderRadius:6, marginTop:30, paddingHorizontal:10 ,height:44}}>
        <Image source= {require('../assets/images/profile.png')} style={{width:20, height:20}}/>
        <TextInput placeholder='Email' keyboardType='email-address' style={{marginLeft:7}}/>
      </View>
      <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderRadius:6, marginTop:30, paddingHorizontal:10, height:44}}>
        <Image source= {require('../assets/images/profile.png')} style={{width:20, height:20}}/>
        <TextInput placeholder='Password' style={{marginLeft:7, flex: 1}}/>
        <Image source= {require('../assets/images/hide.png')} style={{width:20, height:20, marginLeft:10}}/>
      </View>
      <View style={{marginBottom:20}}>
        <Image source={require('../assets/images/box.png')} style={{width:26, height:26, marginTop:20}}/>
        <Text> I Agree to The Company <Text style={{color:'blue'}}>Terms Of Service </Text> </Text>
        <Text style={{color: 'blue'}}>And Privacy Policy</Text>
      </View>

      <Button title='Sign Up' />
    </View>
  )
}

export default _layout;

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#Ffff',
        paddingTop:20,
        padding:20

    },
    icon:{
        borderWidth:1, 
        width:26, 
        height:26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        padding:17,
        marginBottom:30,
        marginTop:30,
    },
})