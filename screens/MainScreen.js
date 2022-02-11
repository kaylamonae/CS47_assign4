import { StyleSheet, Text, SafeAreaView, Pressable, Image, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { myTopTracks, albumTracks } from "../utils/apiOptions";
import { REDIRECT_URI, SCOPES, CLIENT_ID, ALBUM_ID } from "../utils/constants";
import Colors from "../Themes/colors"
import Song from "../SongItem";
import millisToMinutesAndSeconds from "../utils/millisToMinuteSeconds";

// Endpoints for authorizing with Spotify
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token"
};

export default function MainScreen({navigation}) {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      scopes: SCOPES,
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: REDIRECT_URI
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      setToken(access_token);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      // Comment out the one you are not using
      // myTopTracks(setTracks, token);
      albumTracks(ALBUM_ID, setTracks, token);
    }
  }, [token]);

  const SpotifyAuthButton = () => {
    return (
      <Pressable onPress={() => promptAsync()} style={styles.button}>
        <View style={styles.authorize}>
          <Image style={styles.logo} source={require("../assets/spotify-logo.png")}/>
          <Text style={styles.connection}> CONNECT WITH SPOTIFY</Text>
        </View>
      </Pressable>
    )
  }

  const renderItem = (item) => (
    <Song
      index={item.track_number}
      image={item.album.images[2]}
      title={item.name}
      artist={item.artists[0].name}
      album={item.album.name}
      duration={millisToMinutesAndSeconds(item.duration_ms)}
    />
  );
  // item.external_urls.spotify
  // item.preview_url

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = 
    <View>
      <View style={styles.titleLayout}>
        <Image style={styles.titlelogo} source={require('../assets/spotify-logo.png')}/>
        <Text style={styles.title}>Album Tracks</Text>
      </View>
      <FlatList 
        data={tracks}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id} 
      />
    </View>
  } else {
    contentDisplayed = <SpotifyAuthButton/>
  }


  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }, 
  
  button: {
    backgroundColor: Colors.spotify,
    borderRadius: 99999,
    height: 30,
    width: '45%'
  }, 

  authorize: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50
  },

  logo: {
    width: 18, 
    height: 18
  },

  connection: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  titleLayout: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10
  }, 

  titlelogo: {
    width: 24,
    height: 24,
    margin: 3
  }
});