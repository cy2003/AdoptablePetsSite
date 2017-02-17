class Auth {
  static loggedIn() {
    return !!sessionStorage.jwt;
  }
  static loggedOut(){
    sessionStorage.removeItem('jwt');
    return ""
  }
}

export default Auth;
