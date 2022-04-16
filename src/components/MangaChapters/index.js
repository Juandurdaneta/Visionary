import React from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useChapterFetch } from "../../Hooks/useChaptersFetch";

const MangaChapters = ({mangaId}) =>{

    const { state: chapters, loading, error} = useChapterFetch(mangaId);

    if (loading) return <ActivityIndicator style={styles.activityIndicatorContainer} />
    if (error) return <Text>Somethig went wrong...</Text>



    return(
        <View>
            {
                chapters.map((chapter, index)=>(
                    <Text key={index}>Chapter {chapter.number}</Text>
                ))
            }

        </View>
    )


  
}

const styles = StyleSheet.create({
    activityIndicatorContainer : {
        flex: 1,
        justifyContent: "center",
    }
})

export default MangaChapters;

{/* <Image style={{width: 100, height: 100}}source={`data:image/${cover.contentType};base64,${cover.data}`}/> */}
