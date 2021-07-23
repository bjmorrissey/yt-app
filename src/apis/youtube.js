import axios from 'axios';

const KEY = 'AIzaSyAXA2OT5vPoMFtvgbvmDPmsBDH8gster8U';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});