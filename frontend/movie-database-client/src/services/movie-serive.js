const axios = require('axios');

const MovieService = {
    getAllMovies: () => {
        return axios.get('/movies')
            .then((movies) => {
                return movies;
            });
    },
};

export default MovieService;