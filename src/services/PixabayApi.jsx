const BASE_URL = 'https://pixabay.com/api/';
const KEY = '25390634-4c32e13f52f3d8663f768ede1';

export const getImage = (query, page, perPage) => {
  return fetch(
    `${BASE_URL}?key=${KEY}&q=${query}&page=${page}&per_page=${perPage}`
  );
};