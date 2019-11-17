'use strict';

const {google} = require('googleapis');

// initialize the Youtube API library
const youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCbq0VG3_cST2x1_4IZEsZdtOiRQpBJ-bk',
});

youtube.search.list({
  part: 'id,snippet',
  q: 'Node.js on Google Cloud',
}, (err, response) => {
  if (err) {
    console.log('The API returned an error: ' + err);
    return;
  }
  console.log(JSON.stringify(response.data));
});
