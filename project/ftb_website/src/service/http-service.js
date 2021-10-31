import 'whatwg-fetch';
import AccountService from './requests-account';

let accountService = new AccountService();

class HttpService {

    dbLogin = (inputs) => {
        return accountService.getAccount(inputs);
    }
    register = (inputs) => {
        return accountService.postAccount(inputs);
    }
}

export default HttpService;