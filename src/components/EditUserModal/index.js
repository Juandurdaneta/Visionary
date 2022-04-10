import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-elements";
import ModalContainer from "../ModalContainer";
import UserForm from "../UserForm";
import { getUser } from "../../redux/ducks/user"; 
import { useDispatch, useSelector } from "react-redux";
import API from "../../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";


const EditUserModal = ({visible, onModalClose}) =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)


    const [userEditedData, setUserEditedData] = useState(null);


    const closeModal = useCallback(()=>{
        onModalClose(false);
    }, [onModalClose])


    const handleSubmit = async(username, email) =>{
        try{

            const data = await API.updateUser(
                username,
                email
            )


            if(data.status == 200) {
                console.log(data.token)
                await AsyncStorage.setItem("TOKEN", data.token)

                dispatch(getUser());

                closeModal();

                showMessage({
                    message: "User updated successfully!",
                    type: "success"
                })


            } else {
                closeModal();

                showMessage({
                    message: data.message,
                    type: "danger"
                })

            }

        } catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <ModalContainer 
            visible={visible}
            title="Edit Profile"
            Component={
                <ScrollView>
                    <Card>
                        <UserForm onDataChange={setUserEditedData} title="Edit profile" user={user} callback={handleSubmit} />
                    </Card>
                </ScrollView>
            }
            onModalClose={onModalClose}
            />

        </>
    )
}

export default EditUserModal;