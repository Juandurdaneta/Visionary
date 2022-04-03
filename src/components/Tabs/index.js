import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

const Tabs = () => {

    return(
       <View style={styles.navbar}>
           <View style={styles.tab}>
               <Link style={{textDecoration: 'none', color:'red'}}  to={'/'}>
                    <Text style={styles.icon}><FaHome /></Text>
                   <Text>Home</Text>
               </Link>
           </View>

         
           
       </View>
    )
}

const styles = StyleSheet.create({
    navbar : {
        backgroundColor: '#F7F7F7',
        position: 'fixed',
        bottom: 0,
        height: '12vh',
        width: '100%',
        boxShadow: '1px 0px 20px 0px rgba(0,0,0,0.1)',
        padding: '8% 2%',
        borderTopLeftRadius:'15px',
        borderTopRightRadius:'15px',
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridTemplateRows:'1fr',
        gridColumnGap: '15px',
        gridRowGap: '0px'
    },
    tab :{
        textAlign: "center",
        marginTop: '20px',
    },
    icon: {
        fontSize: '1.5rem',
        display: 'block'
    }
})

export default Tabs;