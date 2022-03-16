import axios from "axios";
import Constants from "../Connect/Constants"

const Membership_Card_API_URL = Constants.API_URL + 'membershipcard/'

class MembershipCardService {
    getAll() {
        return axios.get(Membership_Card_API_URL + 'getall')
    }
}

export default new MembershipCardService()