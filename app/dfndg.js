import React from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';

const end = () => {
    return(
        <View style = {esther.app}>
            <Text>StudyPadi</Text>

            <ScrollView>
                <View>
                    <Text>Questions</Text>
                    <Image source = {require("../assets/images/studyy.png")} style = {{witdth: 200, height: 300, borderRadius: 10 }}/>
                </View>
                <View>
                    <Button title = "Check here" />
                    <Text>Others</Text>
                    <Image source = {require("../assets/images/gg.png")} style = {{width: 200, height: 300}} />
                </View>

            </ScrollView>
        </View>
    );
};
export default end;

const esther = StyleSheet.create({
    app:{width: 400, height}
})
