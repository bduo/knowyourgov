import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.REACT_APP_TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.REACT_APP_TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.REACT_APP_TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
