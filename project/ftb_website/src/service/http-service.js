import 'whatwg-fetch';

const dbEndpoint = 'https://ftbstudiodb-0a35.restdb.io';
const myCorsApiKey = '60e213b5c60cf31676a22ad0';

class HttpService {

    dbLogin = (inputs) => {
        /*eslint-disable*/
        var accountEndpoint = dbEndpoint + '/rest/ftb-account';
        var query = '?q={"$and": [{"username" : \"' + inputs['username'] + '\" },'
        +'{"password" : \"'+inputs['password']+'\" }]}';
        let getAccountEndpoint = accountEndpoint + query;
        return this.getRequest(getAccountEndpoint);
        /*var promise = new Promise((resolve, reject) => {

            fetch(getAccountEndpoint, {
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Content-Type' : 'appilcation/json',
                    'X-API-KEY' : myCorsApiKey,
                    'Cache-Control' : 'no-cache',
                }

            })
                .then(data => {
                    resolve(data.json());
                    reject('Request Rejected');
                })
                .catch(error => {
                    console.log('#LoginError -> ' + JSON.stringify(error));
                });
        });

        return promise;*/

    }

    getRequest = (endpoint) => {
        var promise = new Promise((resolve, reject) => {

            fetch(endpoint, {
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Content-Type' : 'appilcation/json',
                    'X-API-KEY' : myCorsApiKey,
                    'Cache-Control' : 'no-cache',
                }

            })
                .then(data => {
                    resolve(data.json());
                    reject('Request Rejected');
                })
                .catch(error => {
                    console.log('#LoginError -> ' + JSON.stringify(error));
                });
        });

        return promise;
    }

}

export default HttpService;