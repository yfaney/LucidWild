import axios from 'axios';

const KEY = 'AIzaSyCbq0VG3_cST2x1_4IZEsZdtOiRQpBJ-bk';

const lucidClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'id,snippet',
      maxResults: 5,
      key: KEY,
    },
});

export { lucidClient, KEY};
