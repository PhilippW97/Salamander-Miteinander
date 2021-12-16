// import { CognitoUserPool } from "amazon-cognito-identity-js";

//aktualisiert 19.11
// const poolData = {
//     UserPoolId: "eu-central-1_IZk0OHxOm",
//     ClientId: "59ainmufs8os4h9ldv4vk7jsqd"
// }

export default {
    apiGateway: {
        REGION: 'eu-central-1',
        URL: 'https://uunwj0l1j3.execute-api.eu-central-1.amazonaws.com/test'
    },
    cognito: {
        REGION: 'eu-central-1',
        USER_POOL_ID: 'eu-central-1_IZk0OHxOm',
        APP_CLIENT_ID: '59ainmufs8os4h9ldv4vk7jsqd',
        IDENTITY_POOL_ID: 'eu-central-1:455655542913:userpool/eu-central-1_IZk0OHxOm',
    }
}

// export default new CognitoUserPool(poolData);