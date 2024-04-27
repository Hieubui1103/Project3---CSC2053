import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function makeCapital(lower){
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function Lyrics() {
  const [lyrics, setLyrics] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [displayTitle, setDisplayTitle] = useState();
  const [DisplayArtist, setDisplayArtist] = useState();
      
  function getLyricsFromApi() {
  //lyric api :https://api.lyrics.ovh/v1/artist/title  
       
  fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
    .then((response) => response.json())
    .then((json) => {  
      /* view the JSON that's returned in the server log */ 
      console.log(json);      

      let tempLyrics;// = json.lyrics;
      if(json.lyrics !== undefined){
        for(let i = 0; i < json.lyrics.length; i++){
          if(json.lyrics[i] === '\n'){
            tempLyrics = json.lyrics.slice(i);
            break;
          }
        }
        setLyrics(tempLyrics);
      }
      else setLyrics(json.error);
      
    })
    .catch((error) => {
       console.error(error);
    });
  };
  
  function getTitle(){
    setDisplayArtist(artist);
    setDisplayTitle(title);
  }

  return (
    <View style={styles.container}>
      <Text>{displayTitle}</Text>
      <Text>{DisplayArtist}</Text>
      <br></br>
      <Text>{lyrics}</Text>
      <br></br>
      <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Title"
            onChangeText={(newText)=>{
              if(newText.includes(' ')){
                newText = newText.split(' ');
                for(let i = 0; i < newText.length; i++){
                  newText[i] = makeCapital(newText[i]);
                }
                newText = newText.join(' ');
              }
              setTitle(makeCapital(newText).replace("'", '%'));
            }}
          />
      <TextInput
            style={{height: 40,
            borderColor: 'gray',
            borderWidth: 1}}
            placeholder="Enter Artist"
            onChangeText={(newText)=>{
              if(newText.includes(' ')){
                newText = newText.split(' ');
                for(let i = 0; i < newText.length; i++){
                  newText[i] = makeCapital(newText[i]);
                }
                newText = newText.join(' ');
              }
              setArtist(makeCapital(newText));
            }}
          />
        <Button title="Get Lyrics" onPress={()=>{getLyricsFromApi(); getTitle();}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
