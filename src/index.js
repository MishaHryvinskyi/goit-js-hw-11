import './css/styles.css';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;
import { getPhotos } from './js/ApiService';


const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector("input"),
    gallery: document.querySelector(".gallery"),
    btnSearch: document.querySelector('button[type="submit"]'),
};


refs.btnSearch.addEventListener('click', () => {
    console.log('log');
});
// refs.form.addEventListener('submit', onSubmit);