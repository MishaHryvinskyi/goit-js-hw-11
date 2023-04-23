import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
import { getPhotos } from './js/ApiService';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


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