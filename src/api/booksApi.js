import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';
export function getBookBySearchTerm(searchTerm, page, limit, filters = {}) {
  const startIndex = (page - 1) * limit;                  //текущая стр.- 1* лимит
  return axios.get(`${BASE_URL}volumes`, {
    params: {
      q: searchTerm,
      startIndex: startIndex,
      maxResults: limit,      //ограничения
      ...filters,
    }
  });    //получить книги по поиску
}

export function getBookById(bookId) {
  return axios.get(`${BASE_URL}volumes/${bookId}`);   //получить книги по id
}