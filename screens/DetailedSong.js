import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function DetailedSong({ navigation }) {
    return (
        <View style={styles.song}>
            <Pressable onPress={() => navigation.navigate('MainScreen')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    song: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})