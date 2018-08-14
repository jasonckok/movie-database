import axios from 'axios';

const MovieService = {
    getAllMovies: () => {
        return axios.get('movies')
            .then((response) => {
                //console.log(response);
                return response.data;
            }).catch(error => console.error(error));
    },
};

export default MovieService;