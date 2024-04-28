import React, { useState } from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SongDetailed = ({ route }) => {
    const { albumName, songList, albumImage } = route.params;
    console.log(route.params)
   return (
    <View style={styles.container}>
      <Image source={{ uri: albumImage }} style={styles.albumPhoto} />
      <Text style={styles.albumName}>{albumName}</Text>
      <FlatList
        data={songList}
        renderItem={({ item }) => (
          <Text style={styles.songItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: 'center',
    paddingTop: 20,
  },
  albumPhoto: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  albumName: {
    fontSize: 22,
    color: 'white',
    marginBottom: 20,
  },
  songItem: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default SongDetailed;
