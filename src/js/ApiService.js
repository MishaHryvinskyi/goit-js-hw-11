const ENDPOINTS = "https://pixabay.com/api/";
const API_KEY = "35643945-433c06e40cd86730ec72beccd";

function getPhotos(query){
    return fetch(`${ENDPOINTS}?apiKey=${API_KEY}&q=${query}&pageSize=5`)
    .then((data) => data.json())
} 

export {getPhotos};