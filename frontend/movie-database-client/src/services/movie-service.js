import axios from 'axios';

const MovieService = {
    getAllMovies: () => {
        return axios.get('movies')
            .then((response) => {
                //console.log(response);
                return response.data;
            }).catch(error => console.error(error));
    },
    getMovie: (id) => {
        return axios.get(`movies/${id}`)
            .then(response => {
                return response.data;
            }).catch(error => console.error(error));
    }
};

export default MovieService;