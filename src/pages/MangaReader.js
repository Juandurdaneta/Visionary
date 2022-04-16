import React from "react";
import { ScrollView, Text, StyleSheet, ActivityIndicator, Image, View } from "react-native";
import { useChapterFetch } from "../Hooks/useChapterFetch";
const MangaReader = ({route}) =>{
    const {id} = route.params;

    const {state: chapter, loading, error } = useChapterFetch(id)
    console.log(chapter)
    console.log(id)


    if (loading) return <ActivityIndicator style={styles.activityIndicatorContainer} />
    if (error) return <Text>Somethig went wrong...</Text>

    return(
        <ScrollView >
            {
                chapter.chapterImages.map((page, index)=>(
                    <View style={styles.container} key={index}>
                        <Image  style={{width: 400, height: 600}}source={`data:image/${page.contentType};base64,${page.data}`}/>
                    </View>
                ))
            }
        </ScrollView>
    )
}

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round(dimensions.width * 9 / 16);
// const imageWidth = dimensions.width;

const styles = StyleSheet.create({
    activityIndicatorContainer : {
        flex: 1,
        justifyContent: "center",
    },
    container : {
        justifyContent: "center",
        alignItems: "center",
    }

});



export default MangaReader;