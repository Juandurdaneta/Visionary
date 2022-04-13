import React from "react"
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { useMangaFetch } from "../Hooks/useMangaFetch";
import { toLocaleDateString } from "../utils/toLocaleDateString";
const MangaDetails = ({route}) =>{

    const {id} = route.params;


    const{ state: manga, loading, error } = useMangaFetch(id);

    if (loading) return <Text>loading...</Text>
    if (error) return <Text>Somethig went wrong...</Text>

   const releaseDate = manga && toLocaleDateString(manga.datePublished);


    return(
        <ScrollView>
            <View style={styles.headerSection}>
                <Image source={manga.poster} style={styles.posterImage} />
                <Text style={styles.headerAuthor}>Author: Jon simmons</Text>
                <Text style={styles.headerReleaseDate}>{releaseDate}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    posterImage : {
        width: 140,
        height: 210,
        borderRadius: 20
    }, 
    headerSection : {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    headerAuthor : {
        fontSize: 15,
        fontWeight: 600,
        margin: 15,
        color: "grey"
    },
    headerReleaseDate : {
       color: "grey"
    }
})


export default MangaDetails;