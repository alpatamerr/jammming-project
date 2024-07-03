const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;

const Deezer = {
    search(term) {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${term}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };
  
      return fetch(url, options)
        .then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.data) {
            return [];
          }
          console.log('API response:', jsonResponse.data);
          return jsonResponse.data.map(track => ({
            id: track.id,
            name: track.title,
            artist: track.artist.name,
            album: track.album.title,
            uri: track.link
          }));
        })
        .catch(error => {
          console.error('Error fetching data from Deezer API:', error);
        });
    }
  };
  
  export default Deezer;