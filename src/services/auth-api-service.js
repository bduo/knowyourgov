import config from '../config'

const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/authorization/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postUser(user) {
    return fetch(`${config.REACT_APP_API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  }
}

export default AuthApiService