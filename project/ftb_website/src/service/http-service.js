import 'whatwg-fetch';

const loginEndpoint = 'https://login.salesforce.com/services/oauth2/'
+'token?grant_type=password&client_id=3MVG9SOw8KERNN0.zFuqlJL348k1M6MUu2Nv4iZao0AE3rZvLPufePLMWY.81SzzQ5cs80QKEcqefCpmtKBJa'
+'&client_secret=C4CA019DC255F7DFA96249A56ABCC1DD9D941F6D21E0D17C06912510A009F3CB'
+'&username=frpanico96@ftbstudio.com'
+'&password=ftbstudio_2122jwSbxFoGz4A4CAL00DRwgA7KV';


class HttpService {

    sdfcLogin = () =>{
        var promise = new Promise((resolve, reject) => {

            fetch(loginEndpoint, {
                method: 'POST',
                mode: 'cors'
            })
                .then(data => {
                    console.log('#LoginData -> ' + JSON.stringify(data));
                })
                .catch(error => {
                    console.log('#LoginError -> ' + JSON.stringify(error));
                });
        });

        return promise;

    }

}

export default HttpService;