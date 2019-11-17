
import {google} from 'googleapis';

// initialize the Youtube API library
const lucidClient = google.youtube({
  version: 'v3',
  auth: 'AIzaSyCbq0VG3_cST2x1_4IZEsZdtOiRQpBJ-bk',
});

export default lucidClient;
