import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getDate from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const ref = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
};

ref.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  ref.gallery.innerHTML = `<span class="loader"></span>`;

  const { text } = event.currentTarget.elements;

  getDate(text.value)
    .then(data => {
      console.log('data', data.hits);
      console.log(data.hits.length);
      if (data.hits.length === 0) {
        iziToast.warning({
          color: '#d5ccda',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      }

      ref.gallery.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
      ref.form.reset();
    })
    .catch(error => {
      alert(error);
    });
}

const lightbox = new SimpleLightbox('.card a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
