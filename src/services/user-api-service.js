import config from '../config'
import TokenService from './token-service'

const UserApiService = {
    getUser(userId) {
        return fetch(`${config.REACT_APP_API_ENDPOINT}/users/${userId}`, {
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(e => Promise.reject(e))
            }
                return res.json()
        })
    },
    getReps(address, city, stateCode) {
        const API_KEY = process.env.REACT_APP_CIVIC_API_KEY;
        const url1 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorLowerBody&key=${API_KEY}`;
        const url2 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=legislatorUpperBody&key=${API_KEY}`;
        const url3 = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address} ${city}, ${stateCode}&includeOffices=true&roles=headOfGovernment&key=${API_KEY}`;
        return Promise.all([fetch(url1), fetch(url2), fetch(url3)]) 
            .then(res => {
                return [res[0].json(), res[1].json(), res[2].json()]
            })
    }
    
}

export default UserApiService