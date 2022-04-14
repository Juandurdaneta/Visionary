import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { useMangaFetch } from "../Hooks/useMangaFetch";
import { toLocaleDateString } from "../utils/toLocaleDateString";
import { AiFillStar } from "react-icons/ai"
import { checkIsFollowing } from "../Hooks/checkIsFollowing";
import FollowButton from "../components/FollowButton";



const MangaDetails = ({route}) =>{

    const {id} = route.params;

    const{ state: manga, loading, error } = useMangaFetch(id);

    
    const {isFollowing, setIsFollowing} = checkIsFollowing(manga._id);



    if (loading) return <ActivityIndicator style={styles.activityIndicatorContainer} />
    if (error) return <Text>Somethig went wrong...</Text>

   const releaseDate = manga && toLocaleDateString(manga.datePublished);


    return(
        <ScrollView>
            <View style={styles.headerSection}>
                <Image source={manga.poster} style={styles.posterImage} />
                <Text style={styles.headerAuthor}>Author: {manga.author}</Text>
                <Text style={styles.headerReleaseDate}>{releaseDate}</Text>

                
              <FollowButton isFollowing={isFollowing} mangaId={manga._id} setFollow={setIsFollowing}/>
                


                
            </View>


            <View style={styles.infoGrid}>
                <View style={styles.infoGridView}>
                    <Text><AiFillStar /><Text style={styles.infoGridData}>4.8</Text>/5</Text>
                </View>
                <View  style={styles.infoGridView}>
                    <Text><Text style={styles.infoGridData}> {manga.followers} </Text> Following</Text>
                </View>
                <View style={{padding: 20}}>
                    <Text><Text style={styles.infoGridData}>{ manga.chapters.length }</Text> Chapters</Text>
                </View >
            </View>

          <View style={styles.bodyText}>
              <Text style={styles.bodyTextBold}>Synopsis</Text>
              <Text>{manga.overview}</Text>
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
        margin: 10,
        color: "grey"
    },
    headerReleaseDate : {
       color: "grey",
    },
    infoGrid : {
        flexDirection: "row",
        backgroundColor: "#F7F7F7",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        margin: 10,
        borderRadius: 15,
        height: 80
    },
    infoGridView : {
        borderEndWidth: 1,
        borderEndColor: "#D7D6DB",
        padding: 20
    },
    infoGridData : {
        fontWeight: 600,
        fontSize: 16
    },
    bodyText : {
        padding: 20
    },
    bodyTextBold : {
        fontWeight: 600,
        fontSize: 18,
        marginBottom: 10
    },
    activityIndicatorContainer : {
        flex: 1,
        justifyContent: "center",
    },
    
})


export default MangaDetails;