import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const MangaPoster = ({manga}) =>{
    return(
        <View>
            <Image source={manga && manga.poster} style={styles.mangaPoster} />
        </View>
    )
}

const styles = StyleSheet.create({
    mangaPoster : {
        height: 160,
        width: 110,
        margin: 5,
        borderRadius: 10
    }
})

export default MangaPoster;