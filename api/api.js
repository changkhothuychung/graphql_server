const axios = require('axios'); 


let dataArr = []; 
for(let i = 1; i < 5; i++){
    dataArr =[...dataArr,axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`)];
}

let arrFilm = [];

exports.getDataFilm = () => {
    return axios.all(dataArr, {
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Credentials': true,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
    }).then(
        result => {
            result ; 
            console.log(result);
        }
    )
}
