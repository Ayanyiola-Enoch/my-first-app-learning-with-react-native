import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
        <View style={styles.box}>
            <Text style={{fontSize:30, color:'black', fontWeight:'bold' }}>BOLD</Text>
        </View>
    </View>
  )
}

export default _layout;

const styles = StyleSheet.create({
    page:{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#ffff',
        alignItems: 'flex-end',
        // justifyContent: 'center'

    },
    box:{
        width: 150,
        height: 150,
        backgroundColor: 'blue',
    }
})




































// import React from 'react';
// import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from "react-native";

// // Component name should be capitalized
// const End = () => {
//     return (
//         <View style={esther.app}>
//             <Text style={{ color: 'purple', fontSize: 30, textDecorationLine:"underline", }}>StudyPadi</Text>

//             <ScrollView>
//                 <View style = {{marginTop:30}}>
//                     <Text style = {{marginBottom:18, marginTop:20, fontSize: 17}}>Dashboard View</Text>
//                     <Image source={require("../assets/images/studyy.png")} style={{ width: 310, height: 290, objectFit:"fill" , borderRadius: 10 }} />
//                 </View>
//                 <View style = {{marginTop:20, marginBottom:30}}>
//                     <Button title="Check Site"/>
//                     <TextInput style= {{height:30}} placeholder='Put in your phone number' keyboardType="numeric" ></TextInput>
//                 </View>

//                 <View style={{marginBottom:20}}>
//                     <Text style={{fontSize:17, marginTop:20, marginBottom:20}}>Questions</Text>
//                     <Image source={require("../assets/images/gg.png")} style={{ width: 337, objectFit:"fill", height: 266, borderRadius: 10  }}/>
//                 </View>

//                 <View style={{marginTop:20, marginBottom:20}}>
//                     <Text style={{fontSize:17,marginBottom:18, marginTop:20}}>Behind the scene </Text>
//                     <Image source ={require("../assets/images/t.png")} style = {{width:350, height:280,  objectFit: "fill", borderRadius: 10}}/>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// // Ensure the component is exported with the correct name
// export default End;

// const esther = StyleSheet.create({
//     app: { flex: 1, paddingTop: 40, paddingHorizontal: 20, backgroundColor: "whitesmoke"}
// });




