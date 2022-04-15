import React from "react";
import { View, Text } from "react-native";
import { useChapterFetch } from "../../Hooks/useChapterFetch";

const MangaChapters = ({mangaId}) =>{

    const { state: chapters, loading, error} = useChapterFetch(mangaId)

    console.log(chapters)

    return(
        <View>
            <Text>{mangaId}</Text>
        </View>
    )

}

export default MangaChapters;