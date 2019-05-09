import Auth from '../../Auth0/Auth'

const auth = new Auth();

function Logout() {

  auth.logout();

}

export default Logout;
