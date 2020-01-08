import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
    // the following three lines MUST be updated
    domain: process.env.AUTH0_DOMAIN,
    audience: process.env.AUTH0_AUDIENCE,
    clientID: process.env.AUTH0_CLIENT_ID,
    redirectUri: process.env.AUTH0_REDIRECT_URL,
    responseType: 'id_token',
    scope: 'openid profile email'
});

export function handleAuthentication() {
    return new Promise((resolve, reject) => {
        auth0Client.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
                return reject(err);
            }
            const idToken = authResult.idToken;
            const profile = authResult.idTokenPayload;
            // set the time that the id token will expire at
            const expiresAt = authResult.idTokenPayload.exp * 1000;
            resolve({
                authenticated: true,
                idToken,
                profile,
                expiresAt
            });
        });
    });
}

export function signIn() {
    auth0Client.authorize();
}

export function signOut() {
    auth0Client.logout({
        returnTo: process.env.AUTH0_LOGOUT_URL,
        clientID: process.env.AUTH0_CLIENT_ID
    });
}