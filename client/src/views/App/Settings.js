// initializing our Auth0Lock

var lock = new Auth0Lock(
    '9G6M72JKGY4qDd1mb67tcxu29Fs1oc99',
    'georanger.auth0.com'
);

// paswordless option
var lockPasswordless = new Auth0LockPasswordless(
    'GWrrQ3bUxX5cnw6EhUHtCazs986nM-wk',
    'georanger.auth0.com'
);

// mobile login
var passwordlessOptions = {
    allowedConnections: ['sms']
}

// email code or 'magic link'
var passwordlessOptions = {
    allowedConnections: ['email'],
    passwordlessMethod: 'code'
}


var Auth = (function () {

    var wm = new WeakMap();
    var privateStore = {};
    var lock;

    function Auth() {
        this.lock = new Auth0Lock(
            '9G6M72JKGY4qDd1mb67tcxu29Fs1oc99',
            'georanger.auth0.com'
        );
        wm.set(privateStore, {
            appName: "example"
        });
    }

    Auth.prototype.getProfile = function () {
        return wm.get(privateStore).profile;
    };

    Auth.prototype.authn = function () {
        // Listening for the authenticated event
        this.lock.on("authenticated", function (authResult) {
            // Use the token in authResult to getUserInfo() and save it if necessary
            this.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    // Handle error
                    return;
                }

                //we recommend not storing access tokens unless absolutely necessary
                wm.set(privateStore, {
                    accessToken: authResult.accessToken
                });

                wm.set(privateStore, {
                    profile: profile
                });

            });
        });
    };
    return Auth;
}());


document.getElementById('btn-login').addEventListener('click', function () {
    lock.show();
});