import { reposService } from '../../services';
import {reposConstants} from '../../store/constants';

const reposActions = {
    getAllRepos,
};

function getAllRepos() {
    return dispatch => {
        reposService
        .getRepos()
        .then(response => {
            // console.log('action response', response);
            dispatch({
                type: reposConstants.GET,
                payload: response
            });
        })
        .catch(error => {});
    }
    
};
export {reposActions}