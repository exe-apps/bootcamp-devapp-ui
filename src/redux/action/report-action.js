import { 
    GENERATE_REPORT,
} from '../constant/report-action-constants';
import { GENERATE_REPORT_URL } from '../../js/service-url-constants';
import axios from 'axios';

export const generateReport = () => {
    return dispatch => {
        return axios.get(GENERATE_REPORT_URL)
            .then(response => {
                dispatch({type: GENERATE_REPORT, payload: response.data})
            })
            .catch(error => {
                // PUT ERROR DISPATCHER HERE
            })
    }
}
