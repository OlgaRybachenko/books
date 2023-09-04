import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/books/v1/';
export function getBookBySearchTerm(searchTerm) {
  return axios.get(`${BASE_URL}volumes?q=${searchTerm}&key=AIzaSyAt-3weR-sdaGb4JsdP3ktm08QMy6TUtx8`);    //получить книги по поиску
}

export function getBookById(bookId) {
  return axios.get(`${BASE_URL}volumes/${bookId}&key=AIzaSyAt-3weR-sdaGb4JsdP3ktm08QMy6TUtx8`);   //получить книги по id
}