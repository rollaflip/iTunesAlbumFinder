let axios = require('axios');


const albumsFromItunes = 'https://itunes.apple.com/search?term=';
let typeFilter = '&entity=album'
let searchLimit = '&limit=50'

  const getAlbumsByArtist = (artist) => {
    let encodedArtist = encodeURIComponent(artist);
    let itunesURL = `${albumsFromItunes}${encodedArtist}${typeFilter}${searchLimit}`;

    return axios.get(itunesURL).then(
      res => {
        if (res.data) {
          let albums = res.data.results;
          return albums;
        } else {
          throw new Error(res.data.message);
        }
      },
      res => {
        throw new Error(res.data.message);
      }
    );
  }
 export default getAlbumsByArtist
