import * as React from 'react';
import { WebView } from "react-native-webview";

export default function SongPreview({ navigation, route}) {
    const params = route.params;
    return (
        <WebView source={{uri: params.url}}/>
    );
}