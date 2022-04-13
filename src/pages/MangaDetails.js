import React, { useEffect, useState } from "react"
import { Text } from "react-native";
import { useMangaFetch } from "../Hooks/useMangaFetch";

const MangaDetails = ({route}) =>{

    const {name, id} = route.params;


    const{ state: manga, loading, error } = useMangaFetch(id);

    console.log(manga)

    if (loading) return <Text>loading...</Text>
    if (error) return <Text>Somethig went wrong...</Text>

    return(
        <Text>{manga[0].title}</Text>
    );
}

export default MangaDetails;