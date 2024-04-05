// У файлі main.js напиши всю логіку роботи додатка.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  span: document.querySelector('.loader'),
};
const API_KEY = '43226566-fed9ea78cdf96918d4e965adc';
const URL = 'https://pixabay.com/api/';

ref.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  ref.span.classList.remove('is-active');

  const { text } = event.currentTarget.elements;

  foo(text.value)
    .then(data => {
      console.log('data', data.hits);
      console.log(data.hits.length);
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }

      ref.list.innerHTML = createMarkup(data.hits);
      ref.span.classList.add('is-active');
      lightbox.refresh();
      ref.form.reset();
    })
    .catch(error => {
      alert(error);
    });
}

function foo(text = '') {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`${URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" />
        </a>
        <ul class="list-stat">
          <li class="item">
            <h2 class="title">likes</h2>
            <p class="stat">${likes}</p>
          </li>
          <li class="item">
            <h2 class="title">Views</h2>
            <p class="stat">${views}</p>
          </li>
          <li class="item">
            <h2 class="title">Comments</h2>
            <p class="stat">${comments}</p>
          </li>
          <li class="item">
            <h2 class="title">Downloads</h2>
            <p class="stat">${downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');
}
const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
