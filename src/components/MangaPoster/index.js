import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const MangaPoster = ({manga, navigation}) =>{
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Manga Details', { name : manga.title, id: manga.mangaId})}>
            <Image source={manga && manga.poster} style={styles.mangaPoster} />
        </TouchableOpacity>
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