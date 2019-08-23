
const UserService = {
  setUserObj(user) {
    localStorage.setItem('user', JSON.stringify(user))
  },
  getUserObj() {
    return JSON.parse(window.localStorage.getItem('user'))
  },
  clearUserObj() {
    window.localStorage.removeItem('user')
  },
  // getUserAddress() {
  //   let user = this.getUserObj();
  //   let addRes = Object.assign({}, ...Object.keys(user).map(res => ({street_address: user.street_address, city: user.city, state_code: user.state_code})))
  //   return addRes
  // },
}

export default UserService
