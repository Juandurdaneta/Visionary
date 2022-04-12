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
        flexDirection: "row"
    }
})

export default MangaGrid;