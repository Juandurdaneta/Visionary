import React, { useState, useCallback } from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import ModalContainer from "../ModalContainer";
import UserForm from "../UserForm";
import { getUser } from "../../redux/ducks/user"; 
import { useDispatch, useSelector } from "react-redux";
import API from "../../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { setUser } from "../../redux/ducks/user";


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
                await AsyncStorage.setItem("TOKEN", data.token)

                dispatch(getUser());

                closeModal();

                showMessage({
                    message: "User updated successfully!",
                    type: "success"
                })


            } else {

              showErrorMessage(data);

            }

        } catch(err){
            console.log(err)
        }
    }

    const showErrorMessage = (data) =>{
        closeModal();

        showMessage({
            message: data.message,
            type: "danger"
        })

    }

    const logoutUser = async() =>{
        await AsyncStorage.removeItem('TOKEN');
        dispatch(setUser(undefined));
        showMessage({
            message: "User successfully deleted",
            type: "success"
        })
    }

    const deleteUser = async() =>{
        const data =  await API.deleteUser();
        data.status == 200 ? logoutUser() : showErrorMessage(data) ;
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

                        <TouchableOpacity style={styles.deleteUserButton} onPress={deleteUser}>
                            <Text style={{ textAlign: 'center', color: 'red'}}>Delete profile</Text>
                        </TouchableOpacity>

                    </Card>
                </ScrollView>
            }
            onModalClose={onModalClose}
            />

        </>
    )
}

const styles = StyleSheet.create({
    deleteUserButton: {
        padding: 8,
        borderColor: "red",
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1
    }
})

export default EditUserModal;