const Api_key = "15aff0274a8a85070e54c3279fe90925";


const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};
export default requests;
