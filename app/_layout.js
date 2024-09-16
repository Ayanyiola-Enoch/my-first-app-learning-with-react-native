// Whatsapp clone

import { StyleSheet, Text, View, Image, FlatList, ScrollView } from "react-native";
import React from "react";

const _layout = () => {

  const channels = [
    {
      id: 1,
      statusPicture: require('../assets/images/food.jpg'),
      title: "CHAMP TUTORIALS",
      message: "welcome...welcome..and..",
      time: '3:30 PM'

    },
    {
      id: 2,
      statusPicture: require('../assets/images/facebook.png'),
      title: "NEWS & UPDATES",
      message: "check out our latest news...",
      time: '3:30 PM'
    },
    {
      id: 3,
      statusPicture: require('../assets/images/im2.jpg'),
      title: "Tech UPDATES",
      message: "check out our latest Updates...",
      time: '3:35 PM'
    },
    {
      id: 4,
      statusPicture: require('../assets/images/im2.jpg'),
      title: "Pulse Nigeria",
      message: "check out our latest news...",
      time: '3:39 PM'
    },
    {
      id: 5,
      statusPicture: require('../assets/images/react-logo.png'),
      title: "React Africa",
      message: "check out our latest news...",
      time: '3:40 PM'
    },
    {
      id: 6,
      statusPicture: require('../assets/images/google.png'),
      title: "Pulse africa",
      message: "check out the latest news...",
      time: '3:44 PM'
    },
    {
      id: 7,
      statusPicture: require('../assets/images/google.png'),
      title: "Pulse Niger",
      message: "check out the latest news...",
      time: '3:44 PM'
    },
    {
      id: 8,
      statusPicture: require('../assets/images/google.png'),
      title: "Google africa",
      message: "check out the latest news...",
      time: '3:44 PM'
    },

  ]


  // Array of items

  const profiles = [
    {
      id: 1,
      profilePicture: require("../assets/images/enoch.jpg"),
      profileName: 'My Status'
    },
    {
      id: 2,
      profilePicture: require("../assets/images/medium-shot-male-flight-attendant-posing.jpg"),
      profileName: 'Ade'
    },
    {
      id: 3,
      profilePicture: require("../assets/images/im2.jpg"),
      profileName: 'Favour'
    },
    {
      id: 4,
      profilePicture: require("../assets/images/woman-8205187_640.jpg"),
      profileName: 'Ayo'
    },
    {
      id: 5,
      profilePicture:require('../assets/images/22.jpg'),
      profileName: 'Bayo'
    },
    {
      id: 6,
      profilePicture: require('../assets/images/laduy.jpg'),
      profileName: 'Bola'
    },
    {
      id: 7,
      profilePicture: require('../assets/images/medium-shot-male-flight-attendant-posing.jpg'),
      profileName: 'Evra'
    },


  ]

  return (



    <View style={styles.page}>

      {/* Topmenu */}

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 27, color: 'white', flex: 1 }}>WA Business</Text>
        <Image source={require("../assets/icons/cameraaa.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Image source={require("../assets/icons/searchhh.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
        <Image source={require("../assets/icons/menu.png")} style={{ width: 30, height: 30 }} />
      </View>

      {/* Flatlist */}

      <View style={{ marginTop: 10 }}>
        <Text style={{ marginBottom: 22, fontSize: 23, fontWeight: '400', color: 'white' }}>Status</Text>
        <View style>
          <FlatList
            data={profiles}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image source={item.profilePicture} style={{ width: 50, height: 50, borderRadius: 50, marginRight: 17 }} />
                  <Text style={{ fontSize: 15, color: 'white' }}>{item.profileName}</Text>
                </View>
              )
            }}
          />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 19, padding: 8, borderColor: 'grey', borderWidth: 1, borderRadius: 33 }}>
        <Image source={require('../assets/icons/spekerrr.png')} style={{ width: 29, height: 29 }} />
        <Text style={{ marginLeft: 9, color: 'green', fontSize: 18, fontWeight: 'bold' }}>Boost status</Text>
      </View>



      {/* Horizontal line */}
      <View style={styles.line}>

      </View>

      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',}}>Channels</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{ fontSize: 18, color: 'green' }}>Explore </Text>
        <Image source={require('../assets/icons/green arr.png')} style={{ Width: 20, height: 20 ,}} />
        </View>
      </View>


      {/* FLatlist */}
      <View>
        <FlatList
          data={channels}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Image source={item.statusPicture} style={{ width: 29, height: 29, borderRadius: 29 }} />
                <View style={{ alignItems: 'center', flexDirection: 'row'}}>
                  <View style={{flex:1, marginLeft: 15}}>
                    <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>{item.title}</Text>
                    <Text style={{ fontSize: 13, color: 'grey' }}>{item.message}</Text>
                  </View>
                  <Text style={{fontSize: 17,  color: 'green',}}>{item.time}</Text>
                </View>
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
    backgroundColor: '#121b22',
    padding: 20,
    paddingHorizontal: 20,
  },

  line: {
    marginTop: 20,
    height: 1,
    width: '100%',
    backgroundColor: 'white',

  }

});






















//profile scheme code below + yOUTUBE + SIGNIN
// import { StyleSheet, Text, View, Image, FlatList } from "react-native";
// import React from "react";

// const _layout = () => {

//   const contents =[
//     {
//       id:1,
//       title: "Personal Data",
//       iconName: require("../assets/icons/profile.png"),
//     },
//     {
//       id:2,
//       title: "Settings",
//       iconName: require("../assets/icons/settings.png"),
//     },
//     {
//       id:3,
//       title: "E-Statement",
//       iconName: require("../assets/icons/note.png"),
//     },
//     {
//       id:4,
//       title: "Refferal Code",
//       iconName: require("../assets/icons/icons8-love-100.png"),
//     },
//     {
//       id:5,
//       title: "Help",
//       iconName: require("../assets/icons//faw.png"),
//     },
//     {
//       id:6,
//       title: "Our Handbook",
//       iconName: require("../assets/icons/handbbook.png"),
//     },
//     {
//       id:7,
//       title: "Community",
//       iconName: require("../assets/icons/community.png"),
//     },
//   ]

//   return (
//     <View style={styles.page}>
//       {/* header */}
//       <View style={{ flexDirection: "row", alignItems: "center" }}>
//         <Image
//           source={require("../assets/images/enoch.jpg")}
//           style={{width: 70, height: 65, borderRadius: 10 }}
//         />
//         <View style={{marginLeft:10}}>
//           <Text style={{ fontSize:22, color:'black', fontWeight:'bold' }}>Ayanyiola Enoch</Text>
//           <Text style={{ fontSize:16, color: "black", }}>
//             Mobile App Developer
//           </Text>
//         </View>
//       </View>

//       {/* LIST  */}

//     <View style={{marginTop:40}}>

//       <FlatList
//       data={contents}
//       renderItem={({item})=>{
//         return(
//           <View style={{flexDirection:'row', alignItems:'center', marginBottom:29}}>
//               <Image source={item.iconName} style={{width:21, height:25,}}/>
//               <Text style={{marginLeft:29, fontSize:16, flex:1}}>{item.title}</Text>
//               <Image source={require('../assets/icons/righhhhyyyyyy.png')} style={{width:15, height:20
//               }}/>
//           </View>
//         )
//       }}
//       />
//       </View>

//       <View style={{paddingHorizontal:30, marginTop:20, borderWidth:1, borderRadius:17, padding:20 }}>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//       <Image source={require('../assets/icons/headset.png')} style={{width:26, height:23}}/>
//         <Text style={{marginLeft:20}}>Feel free to Ask, We Ready to Help</Text>
//         </View>
//       </View>

//     </View>

//   );
// };

// export default _layout;

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 20,
//     paddingHorizontal: 20,
//   },

// });



// LEARNING YOUTUBE 

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
