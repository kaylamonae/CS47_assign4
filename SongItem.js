import { StyleSheet, Text, Image, View } from "react-native";
import React, { useState } from "react";
import Colors from "./Themes/colors";

export default function Song({index, image, title, artist, album, duration}) {
    return (
        <View style={styles.item}>
            <Text style={styles.index}>{index}</Text>
            <Image style={styles.albumArt} source={image}/>
            <View style={styles.content}>

            </View>
            <View style={styles.titleArtist}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.artist}>{artist}</Text>
            </View>
            <Text style={styles.album}>{album}</Text>
            <Text style={styles.duration}>{duration}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    item: {
        flex: 1, 
        flexDirection: "row",
        margin: 10, 
        marginTop: 5,
    }, 

    index: {
        color: Colors.gray,
        alignSelf: "center",
        marginLeft: 5,
        width: "5%"
    },

    albumArt: {
        marginRight: 10, 
        width: "15%"
    },

    titleArtist: {
        alignSelf: "center",
        marginRight: 20,
        width: "40%"
    },

    title: {
        color: "white", 
        fontWeight: "bold"
    },

    artist: {
        color: Colors.gray,
        fontWeight: "bold"
    },

    album: {
        color: "white",
        alignSelf: "center",
        width: "20%",
        fontWeight: "bold"
    },

    duration: {
        color: "white",
        alignSelf: "center", 
        marginRight: 5,
        width: "10%"
    }
});