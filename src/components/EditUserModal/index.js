import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-elements";
import ModalContainer from "../ModalContainer";
import UserForm from "../UserForm";
import { getUser } from "../../redux/ducks/user"; 
import { useDispatch, useSelector } from "react-redux";


const EditUserModal = ({visible, onModalClose}) =>{

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    
    useEffect(()=>{
        dispatch(getUser())
    }, [])


    const [userEditedData, setUserEditedData] = useState(null);

    return(
        <>
            <ModalContainer 
            visible={visible}
            title="Edit Profile"
            Component={
                <ScrollView>
                    <Card>
                        <UserForm onDataChange={setUserEditedData} title="Edit profile" user={user} />
                        <TouchableOpacity  >
                            <Text style={{ textAlign: 'center', color: 'gray'}}>Update user</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  >
                            <Text style={{ textAlign: 'center', color: 'gray'}}>Delete user</Text>
                        </TouchableOpacity>
                    </Card>
                </ScrollView>
            }
            onModalClose={onModalClose}
            />

        </>
    )
}

export default EditUserModal;