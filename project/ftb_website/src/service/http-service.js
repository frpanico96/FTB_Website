import 'whatwg-fetch';

const dbEndpoint = 'https://ftbstudiodb-0a35.restdb.io/rest/ftb-team?q={}';
const myCorsApiKey = '60e213b5c60cf31676a22ad0';

class HttpService {

    dbLogin = () =>{
        var promise = new Promise((resolve, reject) => {

            fetch(dbEndpoint, {
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