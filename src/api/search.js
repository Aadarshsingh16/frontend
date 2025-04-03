import axios from 'axios';

export const fetchResults = async () => {
    return axios.get("http://localhost:5000/api/search-results");
};
