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
}

export default UserApiService