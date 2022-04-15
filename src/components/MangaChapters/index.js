import React from "react";
import { View, Text, Image } from "react-native";
import { useChapterFetch } from "../../Hooks/useChapterFetch";

const MangaChapters = ({mangaId}) =>{

    const { state: chapters, loading, error} = useChapterFetch(mangaId);

    let cover = chapters.length > 0 && chapters[0].chapterImages[0];

   if(cover){
       console.log(cover)
   }
    

    return(
        <View>
           { chapters.length > 0 ?
            <Image style={{width: 100, height: 100}}source={`data:image/${cover.contentType};base64,${cover.data}`}/>
            : <Text>Loading..</Text>
        }
        </View>
    )

}

export default MangaChapters;