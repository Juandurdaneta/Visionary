import React from "react";
import { Text, StyleSheet, View, ScrollView} from "react-native";
import MangaPoster from "../MangaPoster";

const MangaGrid = ({children}) => {
    return(
        <View style={styles.grid}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: "row",
        flex: 1,
        flexWrap:'wrap',
        alignItems:'flex-start'
    }
})

export default MangaGrid;