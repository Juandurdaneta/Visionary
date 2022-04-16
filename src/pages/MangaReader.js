import React from "react";
import { ScrollView, Text } from "react-native";

const MangaReader = ({route}) =>{
    const {id} = route.params;

    console.log(id)

    return(
        <ScrollView>
            <Text>Hello</Text>
        </ScrollView>
    )
}

export default MangaReader;