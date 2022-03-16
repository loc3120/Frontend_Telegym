import axios from "axios";
import Constants from "../Connect/Constants"

const TryingPractice_API_URL = Constants.API_URL + 'candidate/'

class CandidateService {
    create(data) {
        return axios.post(TryingPractice_API_URL + 'create', data)
    }
}

export default new CandidateService()