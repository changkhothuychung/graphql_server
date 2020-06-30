const axios = require('axios'); 

exports.getDataByMovie = (id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=en%2Cnull&fbclid=IwAR0YGcvMYcFf8ieH8yGGDQZuxZ159CdSyQ_YXMqvPgamKd0jPSjWlZELaEg`, {
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials': true,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}