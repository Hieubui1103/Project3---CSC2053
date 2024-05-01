
const { getToken } = require('./test.js')

async function getInfo(searchQuery) {
    try {

        //const search = "Westlife";
        const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=album&limit=50`;

        //const token = await getToken();
        const accessToken = "BQCAMCAAuxdVFHyXOwioi4NhOvrumW0Xu3tfoKx4c2bwfuVwmwKyP5m37fd8A7WGAnJZ7bjoBnmGZlje2OBQBcvST2GZnZoWISCGhQZP0UKu5LV0dWQ"
        const response = await fetch(searchUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            //muteHttpExceptions: true
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const albums = jsonResponse.albums.items;
            console.log('API Response: \n');
            return albums
                .filter(album => album.artists.some(artist => artist.name === searchQuery))
                .map(album => ({
                    album_type: album.album_type,
                    artists: album.artists.map(artist => artist.name).join(', '),
                    album_name: album.name,
                    release_date: album.release_date,
                    total_tracks: album.total_tracks,
                    album_id: album.id,
                    ImageUrl: album.images[1].url,
                    access: accessToken
                }))


        } else {
            console.error('API Request Failed:', response.status);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

function capitalizeEachWord(input) {
    // Split the input string into words
    const words = input.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        // Ensure the word is not an empty string
        if (word.length > 0) {
            // Capitalize the first letter and concatenate with the rest of the word
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            // Return empty string for empty words
            return '';
        }
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
}

getInfo();


module.exports = { getInfo, capitalizeEachWord };


