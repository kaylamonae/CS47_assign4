import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "./Themes/colors";
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Song({ image, title, artist, album, duration, navigation, preview, detailed }) {
    return (
        <View>
            <Pressable onPress={() => {navigation.navigate('Detailed Song', {url: detailed})}} style={styles.button}>
                <Pressable onPress={(e) => {e.stopPropagation(); navigation.navigate('Song Preview', {url: preview})}} style={styles.index}>
                    <AntDesign name="play" size={24} color={Colors.spotify} />
                </Pressable>

                <Image style={styles.albumArt} source={image} />
                <View style={styles.titleArtist}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                    <Text numberOfLines={1} style={styles.artist}>{artist}</Text>
                </View>
                <Text style={styles.album}>{album}</Text>
                <Text style={styles.duration}>{duration}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    index: {
        flexDirection: "row",
        marginRight: 8,
        width: "7%",
        alignSelf: "center"
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
    },

    button: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15, 
    }
});