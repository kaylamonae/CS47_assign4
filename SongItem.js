import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "./Themes/colors";
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// item.external_urls.spotify
// item.preview_url


export default function Song({ image, title, artist, album, duration, navigation }) {
    return (
        <View>
            <Pressable onPress={() => navigation.navigate('DetailedSong')} style={styles.button}>
                <Pressable onPress={() => navigation.navigate('SongPreview')} style={styles.index}>
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
    item: {
        flex: 1,
        flexDirection: "row",
    },

    index: {
        flexDirection: "row",
        marginRight: 8,
        width: "7%"
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
    }
});