const { buildSchema } = require('graphql');

exports.createSchema = () => {
    return buildSchema(`

        type Query {
            movie: [Movie]
            search(name: String): [Search]
            searchById(id: String): [Search]
            movieItem(id: String): Movie
        }

        type MovieItem{
            id: String,
            title: String,
            overview: String,
            release_date: String, 
            poster_path: String,
            backdrop_path: String,
            vote_average: String,
            genre_ids: [String],
        }

        type Movie{
            id: String,
            title: String,
            overview: String,
            popularity: Float, 
            release_date: String, 
            poster_path: String,
            backdrop_path: String,
            vote_average: String,
            genre_ids: [String],
        }

        type Search{
            id: String,
            title: String,
            overview: String,
            popularity: Float, 
            release_date: String, 
            poster_path: String,
            backdrop_path: String, 
            vote_average: String,
            genre_ids: [String],
        }
    `); 
}