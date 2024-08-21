import {API_KEY} from './Constants/Constants'

export const Originals = '/movie/popular?api_key='+API_KEY
export const action = '/discover/movie?api_key='+API_KEY+'&with_genres=28'
export const Drama = '/discover/movie?api_key='+API_KEY+'&with_genres=18'
export const comedy = '/discover/movie?api_key='+API_KEY+'&with_genres=35'
export const Horror = '/discover/movie?api_key='+API_KEY+'&with_genres=27'
export const Thriller = '/discover/movie?api_key='+API_KEY+'&with_genres=53'
export const Adventure = '/discover/movie?api_key='+API_KEY+'&with_genres=12'
export const Animation = '/discover/movie?api_key='+API_KEY+'&with_genres=16'
export const crime = '/discover/movie?api_key='+API_KEY+'&with_genres=80'
export const trnding= '/trending/movie/week?api_key='+API_KEY+'&language=en-US'



