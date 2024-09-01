import React from 'react';
import { View, Text } from 'react-native';

const firsst = () => {
    return (
        <View style={{
            marginLeft: 50,
        }}>
            <Text style={{
                color: 'green',
                height: 100,
                marginTop: 40,
                marginLeft: 20,
            }}>Hi, First app coming</Text>
            <Text>Favour is the best mobile developer tutor</Text>

            <View style={{
                marginLeft:40,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                backgroundColor: 'yellow',
                width: 100,
                height: 100,
            }}>
                <Text>Thanks</Text>
                <Text>A</Text>
                <Text>Lot</Text>
                <Text>Sir</Text>
            </View>

        </View>
    );


};
export default firsst;
