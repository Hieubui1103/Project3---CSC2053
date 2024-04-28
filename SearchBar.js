import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text} from 'react-native';

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');

  const search = () => {
    if (searchText) {
      navigation.navigate('Artist', { searchQuery: searchText }); 
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Discover Music</Text>
      <TextInput 
        style={styles.input}
        placeholder="Search For Artist..."
        placeholderTextColor="#AAA"
        onChangeText={setSearchText}
        value={searchText}
        onSubmitEditing={search} 
      />
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