import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';
export function getBookBySearchTerm(searchTerm) {
  return axios.get(`${BASE_URL}volummes?q=${searchTerm}`);    //получить книги ро поиску
}

export function getBookById(bookId) {
  return axios.get(`${BASE_URL}volummes/${bookId}`);   //получить книги по id
}