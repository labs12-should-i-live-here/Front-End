// Protect client-side routes
<Route
	path="/ping"
	render={props => (!auth.isAuthenticated() ? <Redirect to="/home" /> : <Ping auth={auth} {...props} />)}
/>;

// Limit route access based on scopes
<Route
	path="/admin"
	render={props =>
		!auth.isAuthenticated() || !auth.userHasScopes(['write:messages'])
			? <Redirect to="/home" />
			: <Admin auth={auth} {...props} />}
/>;
