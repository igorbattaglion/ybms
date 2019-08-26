import axios from 'axios'

// themoviedb.org API
const movieDB = axios.create({
  baseURL: process.env.MOVIEDB_V3_API
})

// var headers = {
//   "Access-Control-Allow-Origin": "*",
//   "content-type": "application/json",
//   "cache-control": "no-cache",
//   "crossDomain": true,
// }


// var headersMultipart = {
//   'content-type': 'multipart/form-data'
// }

const api = {
    getConfiguration:() => movieDB.get(`/configuration?api_key=${process.env.MOVIEDB_V3_API_KEY}`),
    getMovies:() => movieDB.get(`/movie/top_rated?api_key=${process.env.MOVIEDB_V3_API_KEY}&language=en-US&page=1`),
    getSeries:() => movieDB.get(`/tv/top_rated?api_key=${process.env.MOVIEDB_V3_API_KEY}&language=en-US&page=1`)
}

export default api