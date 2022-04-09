import React, { useCallback } from "react";
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { AiOutlineCloseCircle } from "react-icons/ai"

const ModalContainer = ({visible, title, Component, onModalClose}) =>{

    console.log(onModalClose)
    const closeModal = useCallback(()=>{
        onModalClose(false);
    }, [onModalClose])

    return(
        <Modal visible={visible} animationType="slide">
            <View style={{ flexDirection:"row", alignItems:"center" }}>
                <TouchableOpacity onPress={closeModal}>
                    <AiOutlineCloseCircle  style={{ margin: 10 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22 }}>{title}</Text>
            </View>
            <>
                {Component}
            </>
        </Modal>
    )
}

export default ModalContainer;