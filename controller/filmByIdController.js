
const api = require('../api/apiByMovie');
const axios = require('axios');


const supportFunction = (args) => {
    let data= null;
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${args.id}&api_key=cfe422613b250f702980a3bbf9e90716`)
    .then(result => result)
   
    
}
exports.getData = () => {

    const root = {
        movieItem:  (args) => {return supportFunction(args).then(result => result.data.results)},
    }
    
    return root;
}