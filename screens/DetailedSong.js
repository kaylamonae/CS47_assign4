import * as React from 'react';
import { WebView } from "react-native-webview";

export default function DetailedSong({ navigation, route}) {
    const params = route.params;
    console.log(params.url);
    return (
        <WebView source={{uri: params.url}}/>
    );
}