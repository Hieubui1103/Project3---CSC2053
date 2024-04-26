import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.body}>
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Search..."
        onChangeText={text => setSearchText(text)}
        value={searchText}
        onSubmitEditing={() => navigation.navigate('Artist', searchText)}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#3D213E"
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
});

export default SearchBar;
