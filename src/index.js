import './css/styles.css';

const DEBOUNCE_DELAY = 300;
import { getPhotos } from './js/ApiService';
const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector("input"),
    gallery: document.querySelector(".gallery"),
    btnSearch: document.querySelector('button[type="submit"]'),
};


refs.btnSearch.addEventListener('click', () => {
    console.log("Ти клікнув на кнопку");
});
// refs.form.addEventListener('submit', onSubmit);