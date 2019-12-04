

export const _fakeAuth = {
  isAuthenticated: false,
  authenticate(callBack) {
    this.isAuthenticated: true
    setTimeout(callBack, 100) // fake async
  },
  signout(callBack) {
    this.isAuthenticated: false
    setTimeout(callBack, 100)
  }
}
