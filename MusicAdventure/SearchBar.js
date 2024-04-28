import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const SearchBar = ({ navigation}) => {
  const [searchText, setSearchText] = useState('');

  const search = () => {
    if (searchText) {
      navigation.navigate('Artist', searchText ); 
    }
  };
  
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Find albums & tracks by artist</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search For Artists..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          
          onSubmitEditing={search}
        />
        <View style={{alignItems: "center", paddingVertical: 10 }}>
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
