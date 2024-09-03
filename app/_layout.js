import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from "react-native";

// Component name should be capitalized
const End = () => {
    return (
        <View style={esther.app}>
            <Text style={{ color: 'purple', fontSize: 50 }}>StudyPadi</Text>

            <ScrollView>
                <View>
                    <Text>Questions</Text>
                    <Image source={require("../assets/images/studyy.png")} style={{ width: 200, height: 100, borderRadius: 10 }} />
                </View>
                <View>
                    <Button title="Check here" />
                    <Text>Others</Text>
                    <Image source={require("../assets/images/gg.png")} style={{ width: 257, height: 200, borderRadius: 10  }} />
                </View>
            </ScrollView>
        </View>
    );
};

// Ensure the component is exported with the correct name
export default End;

const esther = StyleSheet.create({
    app: { flex: 1, paddingTop: 20, paddingHorizontal: 20, }
});
