const API_KEY = '43226566-fed9ea78cdf96918d4e965adc';
const URL = 'https://pixabay.com/api/';

export default function getImagesFromApi(text = '') {
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
