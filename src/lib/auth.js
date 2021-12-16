import Amplify, { Auth } from 'aws-amplify';

let username;
let password;
let email;
let phone_number;
let code;



Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: ' arn:aws:cognito-idp:eu-central-1:455655542913:userpool/eu-central-1_IZk0OHxOm',

        // REQUIRED - Amazon Cognito Region
        region: 'eu-central-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-central-1_IZk0OHxOm',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '2pn4c90l0pk89n1k2t67f7oqpf',

        // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'https://salamander-miteinander.auth.eu-central-1.amazoncognito.com/',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/logout',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

export async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export async function confirmSignUp() {
    try {
        await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}

Auth.signUp({
    username,
    password,
    attributes: {
        email
    }
})

export async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}