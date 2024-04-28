import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.title}> Looking for albums and tracks? Search here!</Text>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
        //onSubmitEditing={() => navigation.navigate('Artist', searchText)}
      />
      <View style={{alignItems: "center", paddingVertical: 10 }}>
      <TouchableOpacity style={styles.body}
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
    backgroundColor: "#1E1E1E",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
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
