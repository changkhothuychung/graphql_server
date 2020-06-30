const api = require('../api/api');
const R = require('ramda');

exports.getData = () => {
    return api.getDataFilm().then(result => {
        const data = result.data.results;
        console.log(data);
        const searchMovie = (name) => data.filter((movie)=> movie.title == name);

        const searchMovieById = (id) => data.filter((movie)=> movie.id == id);

        const root = {
            movie: data,
            search: (args) => searchMovie(args.name),
            searchById: (args) => searchMovieById(args.id),
        }

        return root;

    })
}


