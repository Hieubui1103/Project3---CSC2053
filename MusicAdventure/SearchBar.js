import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.headers}> Looking for albums and tracks? Search here!</Text>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
        //onSubmitEditing={() => navigation.navigate('Artist', searchText)}
      />
      <View style={{alignItems: "center", paddingVertical: 10 }}>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Artist', searchText)} >
        <Text>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#3D213E"
  },
  headers: {
    paddingLeft: 7,
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 18,
    color: 'white'
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    width: 80, // Set a fixed width for the button
    height: 40,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  }
});

export default SearchBar;
