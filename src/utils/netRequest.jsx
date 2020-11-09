import axios from "axios";

const baseURL = 'https://involve-it.com/test_front/api';


export const request = async config => await new Promise(((resolve, reject) => {
    axios({
        baseURL,
        ...config,
    })
        .then((response) => {
                resolve(response?.data);
        })
         .catch(thrown => {
             reject(thrown.response?.data);
         });

}));
