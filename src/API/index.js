import axios from 'axios'
import { apiKey, baseURL } from '../config'

export const getAllNews = () => {
  return axios.get(`${baseURL}`)
}

export const getCategory = (category) => {
  return axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${apiKey}`)
}