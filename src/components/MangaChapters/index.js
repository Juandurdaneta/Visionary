import React from "react";
import { View, Text } from "react-native";

const MangaChapters = ({chapters}) =>{

    return(
        <View>
            <Text>{chapters.length}</Text>
        </View>
    )

}

export default MangaChapters;