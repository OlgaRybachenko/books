import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';
export function getBookBySearchTerm(searchTerm) {
  return axios.get(`${BASE_URL}volumes?q=${searchTerm}`);    //получить книги по поиску
}

export function getBookById(bookId) {
  return axios.get(`${BASE_URL}volumes/${bookId}`);   //получить книги по id
}