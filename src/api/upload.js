import axios from 'axios';

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    return axios.post("http://localhost:5000/api/upload", formData);
};
