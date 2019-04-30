import React from "react";
import { Route } from "react-router-dom";
import "./scss/App.scss";
import Home from "./views/App/Home.js";
import SignUp from "./views/App/SignUp.js";
import Login from "./views/App/Login.js";
import Compare from "./views/App/Compare.js";
import StripePayment from "./views/App/StripePayment";

// // Auth 0
// import Callback from "./containers/auth-zero/Callback/Callback.js";
// import Auth from "./containers/auth-zero/Auth/Auth.js";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/compare" component={Compare} />
      <Route path="/payment" component={StripePayment} />
    </>
  );
}

// // Auth0
// const auth = new Auth();
// const handleAuthentication = ({ location }) => {
//   if (/access_token|id_token|error/.test(location.hash)) {
//     auth.handleAuthentication();
//   }
// };

// class App extends Component {
//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <div className="App">
//           <Switch>
//             <Route
//               exact
//               path="/"
//               render={props => (
//                 <Suspense fallback={<Callback />}>
//                   <LazyLandingPage auth={auth} {...props} />
//                 </Suspense>
//               )}
//             />

//             <Route
//               path="/callback"
//               render={props => {
//                 handleAuthentication(props);
//                 return <Callback {...props} />;
//               }}
//             />

//             <Route
//               path="/dashboard"
//               render={props => (
//                 <Suspense fallback={<Callback />}>
//                   <Dashboard {...props} auth={auth} />
//                 </Suspense>
//               )}
//             />
//             <Route path="/dashboard" component={Dashboard} />
//             <Route path="/stripe-callback" component={StripeCallback} />
//             <Route path="*" component={NotFound} />
//           </Switch>
//         </div>
//       </MuiThemeProvider>
//     );
//   }
// }
export default App;
