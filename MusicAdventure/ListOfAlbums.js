import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  {getInfo , capitalizeEachWord}  from './getAPI';

const ListOfAlbums = ({ route,navigation }) => {
    const [albums, setAlbums] = useState(null);
    //const [listSong, setListSong] = useState({});

    const getSongs = async (access, id) => {
        let albumsSearch = `https://api.spotify.com/v1/albums/${id}`

          const response1 = await fetch(albumsSearch, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${access}`,
            },
            //muteHttpExceptions: true
          });
        
          if (response1.ok) {
            const albumInfo = await response1.json();
            return albumInfo.tracks.items.map((track, index) => `${index + 1} - ${track.name}`);
        } else {
            console.error(`Failed to fetch album tracks for album ID ${id}`);
            return [];
        }
        
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getInfo(capitalizeEachWord(route.params));
                //console.log(data);
                setAlbums(data); 
                /*for (let i = 0; i < data.length; i++){
                let songList = await getSongs(data[i].access, data[i].album_id);
                console.log(data[i].album_name)
                console.log(songList);}*/

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAlbumPress = async (album) => {
        const songList = await getSongs(album.access, album.album_id);
        navigation.navigate('Song Details', { albumName: album.album_name, songList: songList, albumImage: album.ImageUrl, artist: route.params });
    };

    return (
    <View style={styles.container}>
        <View>
            <FlatList
                data={albums}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerButton}
                    onPress={() => handleAlbumPress(item)}>
                        <Image source={{ uri: item.ImageUrl }} style={styles.albumPhoto} />
                        <View style={styles.border}>
                            <Text style={styles.item}>{item.album_name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3D213E"
    },
    containerButton: {
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center', // Align children vertically
        padding: 10
    },
    albumPhoto: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 10,
      },
    item: {
        padding: 10,
        fontSize: 15,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 22
    },
    border: {
        flex: 1,
    }
});

export default ListOfAlbums;