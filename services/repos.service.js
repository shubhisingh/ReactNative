import axios from 'axios';

function getRepos() {
    const requestOptions = {
        method: 'get',
        url: `https://api.github.com/users/supreetsingh247/repos`,
        headers: { 
            'Content-Type': 'application/json',
        },
    };
    return axios(requestOptions)
    .then((response) => { 
        // console.log('response in service', response);
        if ( response.status === 200 ){
            return response.data;
        }
        return {};
    })
    .catch((e) => {
        console.log('service error', e);
    });
}


export const reposService = {
    getRepos,
};