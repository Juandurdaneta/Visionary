import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import ModalContainer from "../ModalContainer";

const EditUserModal = ({visible}) =>{

    return(
        <>
            <ModalContainer 
            visible={visible}
            title="Edit Profile"
            onModalClose={closeModal}
            Component={
                <ScrollView>
                    
                </ScrollView>
            }
            />

        </>
    )
}

export default EditUserModal;