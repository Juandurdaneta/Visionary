import React from "react";
import {  Text,  StyleSheet, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import API from "../../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../../redux/ducks/user"; 
import { useDispatch } from "react-redux";

const FollowButton = ({isFollowing, mangaId, setFollow}) => {

    const dispatch = useDispatch();

    const followManga = async() =>{
        try{

            const data = await API.followManga(mangaId);

            if(data.status === 200) {
                setFollow(true);
                await AsyncStorage.setItem("TOKEN", data.token);
                dispatch(getUser());
                showMessage({
                    message: 'Following manga',
                    type: "success"
                });
            } else {
                showMessage({
                    message: data.message,
                    type: "danger"
                });
            }

        } catch(error){
          showMessage({
                message: 'Error: '+ error.message,
                type: "danger"
            });
        }
    }

    return(
        <>
            {
              isFollowing ? 
                <TouchableOpacity style={styles.unfollowButton}>
                    <Text style={{ color: "#223872", textAlign: 'center' }}> Unfollow </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.followButton} onPress={followManga} >
                    <Text style={{ color: "white", textAlign: 'center' }}> Follow </Text>
                </TouchableOpacity>
            }

        </>
    )
}

const styles = StyleSheet.create({
    followButton : {
        borderRadius: 8,
        backgroundColor: '#223872',
        paddingHorizontal: 30,
        paddingVertical: 5,
        margin: 10,
        
    },
    unfollowButton : {
        borderRadius: 8,
        borderColor: '#223872',
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 5,
        margin: 10,
        
    }
})

export default FollowButton;