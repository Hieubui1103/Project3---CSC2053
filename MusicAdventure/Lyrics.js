import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function extractSubstring(str = " ") {
    // Split the string by "-"
    const parts = str.split('-');

    // If there are at least two parts (one "-" was found)
    if (parts.length >= 2) {
        // Return the second part (the substring between the first and second "-")
        return parts[1].trim(); // Trim to remove any leading or trailing whitespace
    } else {
        // If no "-" was found, return the original string
        return str.trim(); // Trim to remove any leading or trailing whitespace
    }
}

export default function Lyrics({ route }) {
    const [lyrics, setLyrics] = useState(null);
    const { title, artist } = route.params;

    useEffect(() => {
        fetch('https://api.lyrics.ovh/v1/' + artist + '/' + extractSubstring(title))
            .then((response) => response.json())
            .then((json) => {
                let tempLyrics;
                if (json.lyrics !== undefined) {
                    for (let i = 0; i < json.lyrics.length; i++) {
                        if (json.lyrics[i] === '\n') {
                            tempLyrics = json.lyrics.slice(i);
                            break;
                        }
                    }
                    setLyrics(tempLyrics);
                } else {
                    setLyrics(json.error);
                }
            })
            .catch((error) => {
                console.error(error);
                setLyrics('Failed to fetch lyrics');
            });
    }, []); // Empty dependency array to run effect only once

    return (
    <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>{lyrics}</Text>
            </View>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#3D213E', 
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 50
    },
    scrollViewContainer: {
        backgroundColor: '#3D213E',
    },
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 40
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic',
        lineHeight: 30
    }
});

