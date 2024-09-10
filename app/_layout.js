import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";

const _layout = () => {

  const contents =[
    {
      id:1,
      title: "Personal Data",
      iconName: require("../assets/icons/profile.png"),
    },
    {
      id:2,
      title: "Settings",
      iconName: require("../assets/icons/settings.png"),
    },
    {
      id:3,
      title: "E-Statement",
      iconName: require("../assets/icons/note.png"),
    },
    {
      id:4,
      title: "Refferal Code",
      iconName: require("../assets/icons/icons8-love-100.png"),
    },
    {
      id:5,
      title: "Help",
      iconName: require("../assets/icons//faw.png"),
    },
    {
      id:6,
      title: "Our Handbook",
      iconName: require("../assets/icons/handbbook.png"),
    }
  ]

  return (
    <View style={styles.page}>
      {/* header */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/images/enoch.jpg")}
          style={{ width: 40, height: 40, borderRadius: 10 }}
        />
        <View style={{marginLeft:10}}>
          <Text style={{ fontSize:17, color:'black', fontWeight:'bold' }}>Ayanyiola Enoch</Text>
          <Text style={{ fontSize:14, color: "black", fontSize: 9 }}>
            Mobile App Developer
          </Text>
        </View>
      </View>

      {/* LIST  */}

    <View style={{marginTop:40}}>

      <FlatList 
      data={contents}
      renderItem={({item})=>{
        return(
          <View style={{flexDirection:'row', alignItems:'center', marginBottom:20}}> 
              <Image source={item.iconName} style={{width:30, height:30,}}/>
              <Text style={{marginLeft:20, flex:1}}>{item.title}</Text>
              <Image source={require('../assets/icons/righhhhyyyyyy.png')} style={{width:15, height:20
              }}/>
          </View>
        )
      }}
      />
      </View>




    </View>

      
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
  },

});

// import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
// import React from 'react'

// const _layout = () => {
//     const message =['Like','Dislike','Share', 'Remix', 'Thanks','Download']
//   return (
//     <View style={styles.page}>
//       <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>10 LEGENDARY CapCut Editing Tips!</Text>
//       <Text style={{color:'grey'}}>938K viewa 2y ago <Text style={{fontWeight:'bold', color:'white'}}>----more</Text></Text>

//       <View>
//         <View style ={{marginTop: 40}}>
//             <Image source = {require('../assets/images/enoch.jpg')} style={{width:20, height:20, borderRadius:20}} />

//         </View>
//       </View>
//       <FlatList
//       data={message}
//       // numColumns={5}
//     // columnWrapperStyle={{justifyContent:'space-between'}}
//     horizontal={true}
//     showsHorizontalScrollIndicator ={true}

//       renderItem={({item})=>{
//         return(
//             <TouchableOpacity style={styles.container}>
//                 <Text style={{color:'white', marginLeft:10}}>{item}</Text>
//             </TouchableOpacity>
//         )
//       }}/>
//     </View>
//   )
// }

// export default _layout;

// const styles = StyleSheet.create({
//     page:{
//         flex:1,
//         paddingTop:20,
//         backgroundColor:'black',
//         paddingHorizontal: 20,
//     },
//     container:{
//       borderWidth: 1,
//       borderColor:'white',
//       borderRadius: 10,
//       padding:5,
//       width:86,
//       height:38,
//       marginRight: 10,
//       alignItems:'center',
//       justifyContent: 'center'

//     }

// })

///The below work on Signing in template

// import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, StatusBar } from 'react-native'
// import React from 'react'
// // import { StatusBar } from 'expo-status-bar';

// const _layout = () => {
//   return (
//     <View style={styles.page}>

//     <View style={{flex: 1}}>

//         <View style={styles.icon}>
//             <Image source={require('../assets/images/left.png')} style={{width:20, height:20}}/>
//         </View>
//       <Text style={{fontSize:26, fontWeight:'bold'}}>Hi! Welcome Back</Text>
//       <Text style={{color:'grey'}}>Sign in to your account</Text>

//       <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderRadius:6, marginTop:30, paddingHorizontal:10 ,height:44}}>
//         <Image source= {require('../assets/images/profile.png')} style={{width:20, height:20}}/>
//         <TextInput placeholder='Email' keyboardType='email-address' style={{marginLeft:7}}/>
//       </View>
//       <View style={{flexDirection: 'row', alignItems:'center', borderWidth:1, borderRadius:6, marginTop:30, paddingHorizontal:10, height:44}}>
//         <Image source= {require('../assets/images/profile.png')} style={{width:20, height:20}}/>
//         <TextInput placeholder='Password' style={{marginLeft:7, flex: 1}}/>
//         <Image source= {require('../assets/images/hide.png')} style={{width:20, height:20, marginLeft:10}}/>
//       </View>

//     <View style={{ marginBottom:20}}>
//         <Text style={{color:'blue', textAlign:'right', paddingTop:10, fontWeight:'bold'}}>Forgot Password?</Text>
//     </View>

//     <TouchableOpacity style={{marginBottom:10}}>
//         <Text style={{fontSize:16, fontWeight:'bold', color:'white', backgroundColor:'blue', padding:15, borderRadius:10, textAlign:'center'}}>Sign In</Text>
//     </TouchableOpacity>
//         <View>
//             <View style={{height:1,width:350,marginTop:27, backgroundColor:'grey'}}></View>
//             <Text style={{marginTop:-10, backgroundColor:'white', width:350, color:'black', fontWeight:'bold', textAlign:'center'}}>Or Sign In With </Text>
//         </View>

//         <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:20}}>
//             <View style={{borderWidth:1, borderColor:'grey', width:50, height:44, padding:27 ,alignItems:'center', justifyContent:'center', borderRadius: 40}}>
//                 <Image source={require('../assets/images/apple.png')} style={{width:24, height:25}}/>
//             </View>
//             <View style={{borderWidth:1, borderColor:'grey', width:50, height:44, padding:27 ,alignItems:'center', justifyContent:'center', borderRadius: 40}}>
//                 <Image source={require('../assets/images/google.png')} style={{width:24, height:25}}/>
//             </View>
//             <View style={{borderWidth:1, borderColor:'grey', width:50, height:44, padding:27 ,alignItems:'center', justifyContent:'center', borderRadius: 40}}>
//                 <Image source={require('../assets/images/facebook.png')} style={{width:24, height:25}}/>
//             </View>
//         </View>
//     </View>
//         <View>
//             <Text style={{textAlign:'center', marginTop:20}}>Already have an account? <Text style={{color:'blue'}}>Sign Up</Text></Text>
//         </View>
//     </View>
//   )
// }

// export default _layout;

// const styles = StyleSheet.create({
//     page:{
//         flex:1,
//         backgroundColor:'#Ffff',
//         paddingTop:20,
//         padding:20

//     },
//     icon:{
//         borderWidth:1,
//         width:26,
//         height:26,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius:50,
//         padding:17,
//         marginBottom:20,
//         marginTop:20,
//     },
// })
