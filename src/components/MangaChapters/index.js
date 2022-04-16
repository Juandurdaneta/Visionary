import React from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { useChaptersFetch } from "../../Hooks/useChaptersFetch";

const MangaChapters = ({mangaId, navigation}) =>{

    const { state: chapters, loading, error} = useChaptersFetch(mangaId);

    if (loading) return <ActivityIndicator style={styles.activityIndicatorContainer} />
    if (error) return <Text>Somethig went wrong...</Text>



    return(
        <View>
            {
                chapters.map((chapter, index)=>(
                    <Text key={index} onPress={()=> navigation.navigate('Manga Reader', {id: chapter._id, mangaId: chapter.mangaId})} >Chapter {chapter.number}</Text>
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
