export const fetchCCTVFeed = async () => {
    return axios.get("http://localhost:5000/api/cctv-feed");
};
