import React from "react";
import { Menu, MenuOptions, MenuTrigger, MenuOption } from "react-native-popup-menu";
import { Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/ducks/user";


const MenuComponent = () =>{

    const dispatch = useDispatch()

    
    const logout = async() =>{
        await AsyncStorage.removeItem('TOKEN')
        dispatch(setUser(undefined))
    }

    return(
        <Menu style={styles.container}>
            <MenuTrigger text='...' />
                <MenuOptions>
                    <MenuOption onSelect={logout} >
                        <Text style={{color: 'red'}}>Log out</Text>
                    </MenuOption>
                </MenuOptions>
        </Menu>
    )
}

const styles = StyleSheet.create({
    container : {
        marginRight: 30,
        marginBottom: 15
    }
})

export default MenuComponent;