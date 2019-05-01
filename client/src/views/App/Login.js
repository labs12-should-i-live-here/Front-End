import Auth from '../../Auth0/Auth'

const auth = new Auth();

function Login() {

  auth.login();

}

export default Login;
