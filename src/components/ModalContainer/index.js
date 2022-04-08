import React from "react";
import { View, Modal, Text } from 'react-native';

const ModalContainer = ({visible, title, Component}) =>{


    return(
        <Modal visible={visible} animationType="slide">
            <View style={{ flexDirection:"row", alignItems:"center" }}>
                x
                <Text style={{ fontSize: 22 }}>{title}</Text>
            </View>
            <>
                {Component}
            </>
        </Modal>
    )
}

export default ModalContainer;