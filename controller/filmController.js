const api = require('../api/api');
const R = require('ramda');
const axios = require('axios');

const supportFunction = (args) => {
    console.log("args " + args);
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${args}&api_key=cfe422613b250f702980a3bbf9e90716`, {
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(result => result)
}

const supportFunction2 = (args) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR0YGcvMYcFf8ieH8yGGDQZuxZ159CdSyQ_YXMqvPgamKd0jPSjWlZELaEg`)
    .then(result => result); 
}


const flatten = function(arr, result = []) {
    for (let i = 0, length = arr.length; i < length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
        flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  };



let dataArr = []; 
for(let i = 1; i < 5; i++){
    dataArr =[...dataArr,axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`)];
}

let arrFilm = [];

exports.getData = () => {
    return axios.all(dataArr, {
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials': true,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
    }).then(
        axios.spread((...responses) => {
            
            var returndata = []; 
            responses.map((item) => {
                const tmpArr = item.data.results
                returndata = returndata.concat(tmpArr) ;
               
                
            });

            
           
           

            const searchMovie = (name) => returndata.filter((movie)=> movie.title == name);
            const searchMovieById = (id) => returndata.filter((movie)=> movie.id == id);
            const root = {
                movie: returndata,
                search: (args) => searchMovie(args.name),
                searchById: (args) => searchMovieById(args.id),
                movieItem:  (args) => {return supportFunction(args.id).then(result => result.data.results)},
                searchByName: (args)  => {return supportFunction2(args).then(result => result.data)},
            }
    
            return root;

        })
    )
}





// exports.getData = () => {
//     return api.getDataFilm().then(...result => {
//         console.log(result);
//         //const data = result.data.results;
//         const searchMovie = (name) => data.filter((movie)=> movie.title == name);
//         const searchMovieById = (id) => data.filter((movie)=> movie.id == id);
//         const root = {
//             //movie: data,
//             search: (args) => searchMovie(args.name),
//             searchById: (args) => searchMovieById(args.id),
//             movieItem:  (args) => {return supportFunction(args.id).then(result => result.data.results)},
//             searchByName: (args)  => {return supportFunction2(args).then(result => result.data)},
//         }

//         return root;

//     })
// }


