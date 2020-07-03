const api = require('../api/api');
const R = require('ramda');
const axios = require('axios');

const supportFunction = (args) => {
    
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${args.id}&api_key=cfe422613b250f702980a3bbf9e90716`)
    .then(result => result)
}

const supportFunction2 = (args) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR0YGcvMYcFf8ieH8yGGDQZuxZ159CdSyQ_YXMqvPgamKd0jPSjWlZELaEg`)
    .then(result => result); 
}

exports.getData = () => {
    return api.getDataFilm().then(result => {
        const data = result.data.results;
        const searchMovie = (name) => data.filter((movie)=> movie.title == name);
        const searchMovieById = (id) => data.filter((movie)=> movie.id == id);
        console.log(data);
        const root = {
            movie: data,
            search: (args) => searchMovie(args.name),
            searchById: (args) => searchMovieById(args.id),
            movieItem:  (args) => {return supportFunction(args).then(result => result.data.results)},
            searchByName: (args)  => {return supportFunction2(args).then(result => result.data)},
        }

        return root;

    })
}


