import axios from "axios";
import Constants from "../Connect/Constants"

const Coach_Detail_API_URL = Constants.API_URL + 'coach/'

class CoachService {
    getTop6() {
        return axios.get(Coach_Detail_API_URL + 'gettop6')
    }
}

export default new CoachService()