import React, { useState } from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SongDetailed = ({ route }) => {
    const { albumName, songList, albumImage } = route.params;
    console.log(route.params)
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
            <Image source={{ uri: albumImage }} style={styles.albumPhoto}/>
            <Text style={styles.albumName}>{albumName}</Text>
            </View>
            <FlatList
                data={songList}
                renderItem={({ item }) => (
                    <View >
                        <Text style={styles.item}>{item}</Text>
                    </View>
                )}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50, 
        backgroundColor: "#3D213E"
    },
    containerHeader: {
        flexDirection: 'row', // Arrange children horizontally
        alignItems: 'center', // Align children vertically
        padding: 10,
        marginBottom: 10
    },
    albumPhoto: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 10,
      },
    item: {
        padding: 5,
        fontSize: 16,
        flexWrap: 'wrap',
        height: 54,
        color: 'white'
    },
    albumName: {
        padding: 10,
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,
        color: 'lightgrey'
    }
});

export default SongDetailed;
