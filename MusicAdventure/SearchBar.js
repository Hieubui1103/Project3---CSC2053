import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

function removeExtraWhitespace(name) {
  // Remove whitespace after the last word
  name = name.replace(/\s+$/, '');

  // Remove whitespace before the first word
  name = name.replace(/^\s+/, '');

  return name;
}

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [searchSong, setSearchSong] = useState('');
  const [searchArtist, setSearchArtist] = useState('');

  const search = () => {
    if (searchText) {
      navigation.navigate('Artist', removeExtraWhitespace(searchText) ); 
    }
  };

  const searchLyric = () => {
    console.log({ title: searchSong, artist: searchArtist });
    if (searchSong && searchArtist) {
      navigation.navigate('Lyrics', { title: removeExtraWhitespace(searchSong), artist: removeExtraWhitespace(searchArtist) });
    }
  };
  
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Looking for an artist's albums and tracks? Search here!</Text>
      <View style={{alignItems: "center", paddingVertical: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Search For Artists..."
          placeholderTextColor="gray"
          onChangeText={text => setSearchText(text)}
          value={searchText}
          onSubmitEditing={search}
        />

        <View style={{alignItems: "center", paddingVertical: 10 }}>
        <Text style={styles.title}> Looking for a specific track? Search here!</Text>
        <TextInput
          style={styles.input}
          placeholder="Search song..."
          placeholderTextColor="gray"
          onChangeText={text => setSearchSong(text)}
          value={searchSong}
          onSubmitEditing={searchLyric}
        />
        <TextInput
          style={styles.input}
          placeholder="Search artitst..."
          placeholderTextColor="gray"
          onChangeText={text => setSearchArtist(text)}
          value={searchArtist}
          onSubmitEditing={searchLyric}
        />
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: 20,
    paddingHorizontal: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: '80%', 
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 16,
  },
});

export default SearchBar;
