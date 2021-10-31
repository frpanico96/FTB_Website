import 'whatwg-fetch';
import {accountEndpoint, myCorsApiKey} from './request-utils';

class AccountService{
    /*eslint-disable*/
    getAccount = (inputs) =>{
        var query = '?q={"$and": [{"username" : \"' + inputs['username'] + '\" },'
        +'{"password" : \"'+inputs['password']+'\" }]}';
        let getAccountEndpoint = accountEndpoint + query;
        var promise = new Promise((resolve, reject) => {
            fetch(getAccountEndpoint, {
                method: 'GET',
                mode: 'cors',
                headers:{
                    'Content-Type' : 'appilcation/json',
                    'X-API-KEY' : myCorsApiKey,
                    'Cache-Control' : 'no-cache'
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
    postAccount = (inputs) => {
        inputs["role"] = 'player';
        let body = JSON.stringify(inputs);
        let promise = new Promise((resolve, reject) => {
            console.log(body);
            fetch(accountEndpoint,{
                method: 'post',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json',
                    'X-API-KEY' : myCorsApiKey,
                    'Cache-Control' : 'no-cache'
                },
                body: body,
            })
                .then(data => {
                    resolve(data.json());
                    reject('Request Rejected');
                })
                .catch(error => {
                    console.log('#POSTACCOUNT Error -> ' + JSON.stringify(error));
                });
        });
        return promise
    }
}
export default AccountService;

