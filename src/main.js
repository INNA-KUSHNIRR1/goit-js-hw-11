// У файлі main.js напиши всю логіку роботи додатка.
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  span: document.querySelector('.text'),
};
const API_KEY = '43226566-fed9ea78cdf96918d4e965adc';
const URL = 'https://pixabay.com/api/';

ref.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { text } = event.currentTarget.elements;

  foo(text.value)
    .then(data => {
      // Data handling
      console.log('data', data.hits);

      ref.list.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      ref.form.reset();
    })
    .catch(error => {
      // Error handling
      console.log(error);
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      //
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
      }) =>
        `<a class="item-card" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}"/>
            <ul class="item-stat">
              <li class="item>
                <h2 class="title">likes</h2>
                <p class="stat">${likes}</p>
              </li>
              <li class="item>
                <h2 class="title">Views</h2>
                <p class="stat">${views}</p>
              </li>
              <li class="item>
                <h2 class="title">Comments</h2>
                <p class="stat">${comments}</p>
              </li>
              <li class="item>
                <h2 class="title">Downloads</h2>
                <p class="stat">${downloads}</p>
              </li>
            </ul>
        </a>`
    )
    .join('');
  console.log(arr);
}
const lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
// lightbox.on('shown.simplelightbox', () => {
//   const overlay = document.querySelector('.sl-overlay');
//   overlay.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
// });
